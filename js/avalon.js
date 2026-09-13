/* ==========================================================================
   AVALON — site behaviour
   --------------------------------------------------------------------------
   Header scroll state, mobile menu, in-page section navigation, form
   validation and confirmation, and small housekeeping.

   Scroll reveals and parallax live in animations.js.
   ========================================================================== */

(function () {
  "use strict";

  /* ======================================================================
     HEADER — transparent over the hero, solid once scrolled
     ====================================================================== */

  function initHeader() {
    var header = document.querySelector(".siteHeader");
    if (!header) return;

    // Pages with no dark hero behind the header opt in to dark header text by
    // adding `data-header-on-light` to the <body>.
    if (document.body.hasAttribute("data-header-on-light")) {
      header.classList.add("headerOnLight");
    }

    var threshold = 60;
    var isScrolled = false;
    var ticking = false;

    function update() {
      var next = window.scrollY > threshold;
      if (next !== isScrolled) {
        isScrolled = next;
        header.classList.toggle("isScrolled", isScrolled);
      }
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    update();
  }

  /* ======================================================================
     MOBILE MENU
     ====================================================================== */

  function initMobileMenu() {
    var button = document.querySelector(".menuButton");
    var menu = document.getElementById("mobileMenu");
    if (!button || !menu) return;

    /* setOpen() moves focus deliberately, which keyboard users need. But a
       scripted .focus() also makes the browser paint the :focus-visible ring
       for someone who just tapped, so the menu button came back from a tap
       wearing a green box. Record how the person is actually driving the page
       and let the stylesheet suppress the ring for pointers only. */
    function noteInput(mode) {
      document.documentElement.setAttribute("data-input", mode);
    }
    document.addEventListener("pointerdown", function () { noteInput("pointer"); }, true);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Tab") noteInput("keyboard");
    }, true);

    var isOpen = false;

    function setOpen(next) {
      isOpen = next;
      menu.classList.toggle("isOpen", isOpen);
      document.body.classList.toggle("menuOpen", isOpen);
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menu.setAttribute("aria-hidden", isOpen ? "false" : "true");

      var labelKey = isOpen ? "nav.closeMenu" : "nav.openMenu";
      if (window.avalonI18n) {
        button.setAttribute("aria-label", window.avalonI18n.resolve(labelKey));
      }

      if (isOpen) {
        var firstLink = menu.querySelector("a, button");
        if (firstLink) firstLink.focus();
      } else {
        button.focus();
      }
    }

    button.addEventListener("click", function () {
      setOpen(!isOpen);
    });

    // Any navigation inside the drawer closes it.
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen) setOpen(false);
    });

    // Returning to a desktop width should never leave the drawer stuck open.
    window.addEventListener("resize", function () {
      if (isOpen && window.innerWidth >= 1080) setOpen(false);
    });

    setOpen(false);
  }

  /* ======================================================================
     IN-PAGE SECTION NAVIGATION — highlights the section you are reading
     ====================================================================== */

  function initSubNav() {
    var subNav = document.querySelector(".subNav");
    if (!subNav) return;

    var links = Array.prototype.slice.call(subNav.querySelectorAll(".subNavLink"));
    if (!links.length) return;

    var sections = links
      .map(function (link) {
        var id = link.getAttribute("href");
        return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle("isActive", link.getAttribute("href") === "#" + id);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        // Pick the entry nearest the top of the viewport that is on screen.
        var visible = entries.filter(function (entry) { return entry.isIntersecting; });
        if (!visible.length) return;
        visible.sort(function (a, b) {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        setActive(visible[0].target.id);
      },
      // The band sits just below the sticky header.
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (section) { observer.observe(section); });
    setActive(sections[0].id);
  }

  /* ======================================================================
     CURRENT PAGE MARKER IN THE NAVIGATION
     ====================================================================== */

  function initCurrentNav() {
    var page = document.body.getAttribute("data-page");
    if (!page) return;

    var links = document.querySelectorAll("[data-nav-page]");
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute("data-nav-page") === page) {
        links[i].classList.add("isCurrent");
        links[i].setAttribute("aria-current", "page");
      }
    }
  }

  /* ======================================================================
     FORMS
     --------------------------------------------------------------------
     PLACEHOLDER: no backend is connected. Submission is intercepted, the
     values are logged to the console for review, and the warm confirmation
     message is shown. To go live, post `values` to a real endpoint (or wire
     the <form> to a form service) and keep the confirmation behaviour.
     ====================================================================== */

  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function initForms() {
    var forms = document.querySelectorAll(".avalonForm");
    for (var i = 0; i < forms.length; i++) {
      bindForm(forms[i]);
    }
  }

  /* The site is static, so there is no server to post to. On submit we compose
     the message and hand it to the visitor's own mail client, which means the
     enquiry arrives from their real address and they keep a copy in Sent.
     If a form backend is added later, this is the one function to replace. */
  var CONTACT_EMAIL = "alfredov@avalonsintra.com";

  var FIELD_LABELS = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    relationship: "Enquiring as",
    message: "Message",
    specialty: "Area of specialty",
    note: "Note"
  };

  function openMailClient(form, values) {
    var isTeam = form.getAttribute("data-confirmation") === "teamConfirmation";
    var subject = isTeam
      ? "Avalon - joining the team: " + (values.name || "")
      : "Avalon - waitlist enquiry: " + (values.name || "");

    var lines = [];
    for (var key in values) {
      if (!Object.prototype.hasOwnProperty.call(values, key)) continue;
      var value = (values[key] || "").trim();
      if (value === "") continue;
      lines.push((FIELD_LABELS[key] || key) + ": " + value);
    }

    var href = "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(lines.join("\n"));

    /* Opened in a new context so a missing mail client cannot blank the page
       the person is reading. */
    window.open(href, "_blank");
  }

  function bindForm(form) {
    var confirmation = document.getElementById(form.getAttribute("data-confirmation"));

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!validateForm(form)) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var values = {};
      var data = new FormData(form);
      data.forEach(function (value, key) { values[key] = value; });

      openMailClient(form, values);

      if (confirmation) {
        form.hidden = true;
        confirmation.classList.add("isVisible");
        confirmation.setAttribute("tabindex", "-1");
        confirmation.focus();
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      }
    });

    // Clear an error as soon as the person starts fixing it.
    form.addEventListener("input", function (event) {
      var field = event.target;
      if (field.getAttribute("aria-invalid") === "true") {
        clearFieldError(field);
      }
    });
  }

  function validateForm(form) {
    var fields = form.querySelectorAll("[data-required], [data-validate]");
    var isValid = true;

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var value = (field.value || "").trim();
      var errorKey = null;

      if (field.hasAttribute("data-required") && value === "") {
        errorKey = field.tagName === "SELECT" ? "forms.errorSelect" : "forms.errorRequired";
      } else if (field.getAttribute("data-validate") === "email" && value !== "" && !EMAIL_PATTERN.test(value)) {
        errorKey = "forms.errorEmail";
      }

      if (errorKey) {
        setFieldError(field, errorKey);
        isValid = false;
      } else {
        clearFieldError(field);
      }
    }

    return isValid;
  }

  function errorElementFor(field) {
    var id = field.getAttribute("aria-describedby");
    return id ? document.getElementById(id) : null;
  }

  function setFieldError(field, errorKey) {
    field.setAttribute("aria-invalid", "true");
    var errorElement = errorElementFor(field);
    if (errorElement && window.avalonI18n) {
      errorElement.textContent = window.avalonI18n.resolve(errorKey);
    }
  }

  function clearFieldError(field) {
    field.removeAttribute("aria-invalid");
    var errorElement = errorElementFor(field);
    if (errorElement) errorElement.textContent = "";
  }

  /* ======================================================================
     HOUSEKEEPING
     ====================================================================== */

  function initFooterYear() {
    var nodes = document.querySelectorAll("[data-current-year]");
    var year = String(new Date().getFullYear());
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = year;
  }

  /* ======================================================================
     START
     ====================================================================== */

  /* ======================================================================
     OVERFLOW DEBUG

     Off unless the URL carries ?debugOverflow. Add it to any page, on the
     device that actually shows the problem, and this lists whatever is
     sticking out past the right edge. It exists because horizontal scrolling
     was reported on a real phone that no desktop browser would reproduce, and
     guessing at the cause from here was not working.

       https://avalonsintra.com/?debugOverflow
     ====================================================================== */

  function initOverflowDebug() {
    if (window.location.search.indexOf("debugOverflow") === -1) return;

    var panel = document.createElement("div");
    panel.setAttribute("style", [
      "position:fixed", "left:0", "right:0", "bottom:0", "z-index:99999",
      "max-height:52vh", "overflow:auto", "background:#14120f", "color:#eae4d8",
      "font:11px/1.5 ui-monospace,Menlo,Consolas,monospace", "padding:10px",
      "border-top:2px solid #4C5F52"
    ].join(";"));
    document.body.appendChild(panel);

    function scan() {
      var doc = document.documentElement;
      var width = doc.clientWidth;
      var lines = [
        "viewport " + window.innerWidth + "  client " + width +
        "  scrollWidth " + doc.scrollWidth +
        (doc.scrollWidth > width ? "  <-- PAGE IS WIDER" : "  (fits)"),
        "scrollX " + Math.round(window.scrollX) + "   dpr " + window.devicePixelRatio
      ];

      var all = document.body.querySelectorAll("*");
      var found = 0;
      for (var i = 0; i < all.length && found < 14; i++) {
        if (all[i] === panel || panel.contains(all[i])) continue;
        var r = all[i].getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (Math.round(r.right) <= width + 1 && Math.round(r.left) >= -1) continue;
        var name = all[i].tagName.toLowerCase();
        if (all[i].id) name += "#" + all[i].id;
        if (typeof all[i].className === "string" && all[i].className) {
          name += "." + all[i].className.trim().split(/\s+/).slice(0, 3).join(".");
        }
        lines.push(name + "  left:" + Math.round(r.left) + " right:" + Math.round(r.right));
        found++;
      }
      if (found === 0) lines.push("no element extends past the edge right now");
      panel.textContent = lines.join("\n");
    }

    scan();
    window.addEventListener("scroll", scan, { passive: true });
    window.addEventListener("resize", scan);
  }

  function init() {
    initHeader();
    initMobileMenu();
    initSubNav();
    initCurrentNav();
    initForms();
    initFooterYear();
    initOverflowDebug();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
