/* ==========================================================================
   AVALON — bilingual content renderer
   --------------------------------------------------------------------------
   The HTML files carry no copy. They carry keys. This file reads the active
   language object (content.en.js / content.pt.js) and writes the text in.

   Attributes understood on any element:
     data-i18n              -> element text
     data-i18n-paras        -> value is an array; renders one <p> per item
     data-i18n-list         -> value is an array; renders one <li> per item
     data-i18n-class        -> class applied to generated <p> / <li> elements
     data-i18n-alt          -> image alt attribute
     data-i18n-placeholder  -> input/textarea placeholder attribute
     data-i18n-aria         -> aria-label attribute
     data-i18n-content      -> meta content attribute

   The token <ph>some words</ph> inside a string renders as the small dashed
   "placeholder" tag on the page. Everything else is escaped, so content is
   never a route for markup injection.

   Missing keys fall back to English, so an incomplete translation degrades
   gracefully instead of showing blanks.
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "avalonLanguage";
  var DEFAULT_LANGUAGE = "en";
  var SUPPORTED = ["en", "pt"];

  var content = window.avalonContent || {};
  var currentLanguage = DEFAULT_LANGUAGE;

  /* ---- Key lookup, with fallback to English ----------------------------- */

  function lookup(dictionary, key) {
    if (!dictionary) return undefined;
    var parts = key.split(".");
    var value = dictionary;
    for (var i = 0; i < parts.length; i++) {
      if (value === null || typeof value !== "object") return undefined;
      value = value[parts[i]];
    }
    return value;
  }

  function resolve(key) {
    var value = lookup(content[currentLanguage], key);
    if (value === undefined || value === null || value === "") {
      value = lookup(content[DEFAULT_LANGUAGE], key);
      if (value === undefined) {
        // Loud in the console, quiet on the page.
        if (window.console) console.warn("[avalon i18n] missing key:", key);
        return "";
      }
    }
    return value;
  }

  /* ---- Rendering -------------------------------------------------------- */

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* Copy is escaped, then a very short whitelist is put back: <ph> for the
     dashed placeholder tag, and <strong>/<em> so editors can emphasise a
     phrase without any other markup becoming a route for injection. */
  var INLINE_PATTERNS = [
    [/&lt;ph&gt;([\s\S]*?)&lt;\/ph&gt;/g, '<span class="placeholderTag">$1</span>'],
    [/&lt;strong&gt;([\s\S]*?)&lt;\/strong&gt;/g, '<strong>$1</strong>'],
    [/&lt;em&gt;([\s\S]*?)&lt;\/em&gt;/g, '<em>$1</em>']
  ];

  var INLINE_TAG = /<\/?(?:ph|strong|em)>/;

  function hasInlineMarkup(value) {
    return typeof value === "string" && INLINE_TAG.test(value);
  }

  function toHtml(value) {
    var html = escapeHtml(value);
    for (var i = 0; i < INLINE_PATTERNS.length; i++) {
      html = html.replace(INLINE_PATTERNS[i][0], INLINE_PATTERNS[i][1]);
    }
    return html;
  }

  function writeText(element, value) {
    if (hasInlineMarkup(value)) {
      element.innerHTML = toHtml(value);
    } else {
      element.textContent = String(value);
    }
  }

  function writeCollection(element, value, tagName, fallbackClass) {
    var items = Array.isArray(value) ? value : [value];
    var className = element.getAttribute("data-i18n-class");
    if (className === null) className = fallbackClass;

    element.innerHTML = "";
    items.forEach(function (item) {
      var node = document.createElement(tagName);
      if (className) node.className = className;
      writeText(node, item);
      element.appendChild(node);
    });
  }

  /* ---- Apply the active language to the whole document ------------------ */

  function applyLanguage() {
    document.documentElement.setAttribute("lang", currentLanguage);

    each("[data-i18n]", function (el) {
      writeText(el, resolve(el.getAttribute("data-i18n")));
    });

    each("[data-i18n-paras]", function (el) {
      writeCollection(el, resolve(el.getAttribute("data-i18n-paras")), "p", "bodyText");
    });

    each("[data-i18n-list]", function (el) {
      writeCollection(el, resolve(el.getAttribute("data-i18n-list")), "li", "");
    });

    each("[data-i18n-alt]", function (el) {
      el.setAttribute("alt", stripTags(resolve(el.getAttribute("data-i18n-alt"))));
    });

    each("[data-i18n-placeholder]", function (el) {
      el.setAttribute("placeholder", stripTags(resolve(el.getAttribute("data-i18n-placeholder"))));
    });

    each("[data-i18n-aria]", function (el) {
      el.setAttribute("aria-label", stripTags(resolve(el.getAttribute("data-i18n-aria"))));
    });

    each("[data-i18n-content]", function (el) {
      el.setAttribute("content", stripTags(resolve(el.getAttribute("data-i18n-content"))));
    });

    updateToggleState();

    // Layout has changed; anything measuring the page needs to re-measure.
    window.dispatchEvent(
      new CustomEvent("avalonLanguageChanged", { detail: { language: currentLanguage } })
    );
  }

  // Attribute values (alt text, placeholders) cannot carry markup, so the
  // <ph> token is unwrapped to plain text there.
  function stripTags(value) {
    return String(value).replace(/<\/?ph>/g, "");
  }

  function each(selector, callback) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) callback(nodes[i]);
  }

  /* ---- The EN / PT toggle ----------------------------------------------- */

  function updateToggleState() {
    each(".langOption", function (button) {
      var isActive = button.getAttribute("data-language") === currentLanguage;
      button.classList.toggle("isActive", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function setLanguage(language) {
    if (SUPPORTED.indexOf(language) === -1) return;
    currentLanguage = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      /* Private browsing or blocked storage: the choice simply won't persist. */
    }
    applyLanguage();
  }

  function readStoredLanguage() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (error) {
      /* ignore */
    }
    /* English is the default for everyone on a first visit. We deliberately do
       not read navigator.language: the site is written in English first, and a
       visitor who wants Portuguese has the toggle in the header. Once they use
       it the choice is stored above and this function never gets this far. */
    return DEFAULT_LANGUAGE;
  }

  function bindToggle() {
    document.addEventListener("click", function (event) {
      var button = event.target.closest(".langOption");
      if (!button) return;
      event.preventDefault();
      setLanguage(button.getAttribute("data-language"));
    });
  }

  /* ---- Start ------------------------------------------------------------ */

  function init() {
    currentLanguage = readStoredLanguage();
    applyLanguage();
    bindToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Exposed so other scripts (and the console, during review) can read or
  // change the language.
  window.avalonI18n = {
    setLanguage: setLanguage,
    getLanguage: function () { return currentLanguage; },
    resolve: resolve
  };
})();
