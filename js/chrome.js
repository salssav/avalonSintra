/* ==========================================================================
   AVALON — shared site chrome
   --------------------------------------------------------------------------
   The header, the mobile menu drawer and the footer are identical on every
   page, so they are defined once here and injected into the two mount points
   each page provides:

       <div data-site-header></div>
       <div data-site-footer></div>

   This markup carries data-i18n keys only — no copy. i18n.js fills it in
   immediately afterwards (script order in the HTML guarantees this file runs
   first).

   TO CHANGE THE NAVIGATION: edit SITE_NAVIGATION below. It drives the desktop
   nav, the mobile drawer and the footer columns at once.
   ========================================================================== */

(function () {
  "use strict";

  /* ======================================================================
     NAVIGATION MODEL — the sitemap, in one place
     ====================================================================== */

  var SITE_NAVIGATION = [
    {
      id: "programs",
      href: "programs.html",
      labelKey: "nav.programs",
      children: [
        { href: "programs.html#residence",   labelKey: "navSub.residence" },
        { href: "programs.html#dayHospital", labelKey: "navSub.dayHospital" },
        { href: "programs.html#outpatient",  labelKey: "navSub.outpatient" },
        { href: "programs.html#activities",  labelKey: "navSub.activities" },
        { href: "programs.html#therapies",   labelKey: "navSub.therapies" }
      ]
    },
    {
      id: "treatments",
      href: "treatments.html",
      labelKey: "nav.treatments",
      children: [
        { href: "treatments.html#bpd",        labelKey: "navSub.bpd" },
        { href: "treatments.html#depression", labelKey: "navSub.depression" },
        { href: "treatments.html#anxiety",    labelKey: "navSub.anxiety" },
        { href: "treatments.html#ptsd",       labelKey: "navSub.ptsd" }
      ]
    },
    {
      id: "solutions",
      href: "solutions.html",
      labelKey: "nav.solutions",
      children: [
        { href: "solutions.html#dbt",         labelKey: "navSub.dbt" },
        { href: "solutions.html#emdr",        labelKey: "navSub.emdr" },
        { href: "solutions.html#mindfulness", labelKey: "navSub.mindfulness" }
      ]
    },
    {
      id: "house",
      href: "house.html",
      labelKey: "nav.house",
      children: [
        { href: "house.html#rooms",         labelKey: "navSub.rooms" },
        { href: "house.html#commonAreas",   labelKey: "navSub.commonAreas" },
        { href: "house.html#outdoorSpaces", labelKey: "navSub.outdoorSpaces" },
        { href: "house.html#whySintra",     labelKey: "navSub.whySintra" }
      ]
    },
    {
      id: "admissions",
      href: "admissions.html",
      labelKey: "nav.admissions",
      children: [
        { href: "admissions.html#process",  labelKey: "navSub.admissionProcess" },
        { href: "admissions.html#progress", labelKey: "navSub.trackProgress" },
        { href: "admissions.html#waitlist", labelKey: "navSub.waitlistForm" }
      ]
    },
    {
      id: "family",
      href: "family.html",
      labelKey: "nav.family",
      children: [
        { href: "family.html#resources", labelKey: "navSub.familyResources" },
        { href: "family.html#access",    labelKey: "navSub.familyAccess" }
      ]
    },
    {
      id: "about",
      href: "about.html",
      labelKey: "nav.about",
      children: [
        { href: "about.html#beliefs",  labelKey: "navSub.beliefs" },
        { href: "about.html#origin",   labelKey: "navSub.origin" },
        { href: "about.html#team",     labelKey: "navSub.medicalTeam" },
        { href: "about.html#joinTeam", labelKey: "navSub.joinTeam" }
      ]
    }
  ];

  var WAITLIST_HREF = "admissions.html#waitlist";

  /* ======================================================================
     MARKUP
     ====================================================================== */

  /* PLACEHOLDER: logo not final. The wordmark below is a text placeholder.
     To swap in a real logo, replace the inner <span> with:
        <img src="images/brand/avalonLogo.svg" alt="Avalon">
     and delete the data-i18n attribute. One line, in this one place. */
  function wordmark(extraClass) {
    return (
      '<a class="brandWordmark ' + (extraClass || "") + '" href="index.html">' +
        '<span data-i18n="brand.wordmark"></span>' +
      "</a>"
    );
  }

  function languageToggle() {
    return (
      '<div class="langToggle" role="group" data-i18n-aria="nav.languageLabel">' +
        '<button type="button" class="langOption" data-language="en" ' +
          'data-i18n-aria="nav.switchToEnglish" aria-pressed="false">EN</button>' +
        '<button type="button" class="langOption" data-language="pt" ' +
          'data-i18n-aria="nav.switchToPortuguese" aria-pressed="false">PT</button>' +
      "</div>"
    );
  }

  function headerMarkup() {
    var navItems = SITE_NAVIGATION.map(function (item) {
      return (
        "<li>" +
          '<a class="navLink" href="' + item.href + '" data-nav-page="' + item.id + '" ' +
            'data-i18n="' + item.labelKey + '"></a>' +
        "</li>"
      );
    }).join("");

    return (
      '<header class="siteHeader">' +
        '<div class="headerInner">' +
          wordmark() +
          '<nav class="navPrimary" data-i18n-aria="nav.languageLabel">' +
            '<ul class="navList">' + navItems + "</ul>" +
          "</nav>" +
          '<div class="headerActions">' +
            languageToggle() +
            '<a class="buttonPrimary headerCta" href="' + WAITLIST_HREF + '" ' +
              'data-i18n="nav.waitlist"></a>' +
            '<button type="button" class="menuButton" aria-expanded="false" ' +
              'aria-controls="mobileMenu" data-i18n-aria="nav.openMenu">' +
              "<span></span><span></span><span></span>" +
            "</button>" +
          "</div>" +
        "</div>" +
      "</header>" +
      mobileMenuMarkup()
    );
  }

  function mobileMenuMarkup() {
    var items = SITE_NAVIGATION.map(function (item) {
      var children = item.children
        .map(function (child) {
          return '<li><a href="' + child.href + '" data-i18n="' + child.labelKey + '"></a></li>';
        })
        .join("");

      return (
        "<li>" +
          '<a class="mobileMenuLink" href="' + item.href + '" data-i18n="' + item.labelKey + '"></a>' +
          '<ul class="mobileMenuSub">' + children + "</ul>" +
        "</li>"
      );
    }).join("");

    return (
      '<div class="mobileMenu" id="mobileMenu" aria-hidden="true">' +
        '<nav><ul class="mobileMenuList">' + items + "</ul></nav>" +
        '<div class="mobileMenuFooter">' +
          '<a class="buttonPrimary" href="' + WAITLIST_HREF + '" data-i18n="nav.waitlist"></a>' +
        "</div>" +
      "</div>"
    );
  }

  function footerColumn(titleKey, links) {
    var items = links
      .map(function (link) {
        return '<li><a href="' + link.href + '" data-i18n="' + link.labelKey + '"></a></li>';
      })
      .join("");

    return (
      "<div>" +
        '<h2 class="footerNavTitle" data-i18n="' + titleKey + '"></h2>' +
        '<ul class="footerNavList">' + items + "</ul>" +
      "</div>"
    );
  }

  function footerMarkup() {
    var exploreLinks = [
      { href: "index.html",      labelKey: "nav.home" },
      { href: "programs.html",   labelKey: "nav.programs" },
      { href: "house.html",      labelKey: "nav.house" },
      { href: "admissions.html", labelKey: "nav.admissions" }
    ];

    var careLinks = [
      { href: "treatments.html", labelKey: "nav.treatments" },
      { href: "solutions.html",  labelKey: "nav.solutions" },
      { href: "family.html",     labelKey: "nav.familyLong" },
      { href: "about.html",      labelKey: "nav.about" }
    ];

    var programLinks = SITE_NAVIGATION[0].children.slice(0, 4);

    var contactLinks = [
      { href: WAITLIST_HREF,           labelKey: "navSub.waitlistForm" },
      { href: "about.html#joinTeam",   labelKey: "navSub.joinTeam" },
      { href: "#",                     labelKey: "footer.email" },
      { href: "#",                     labelKey: "footer.phone" }
    ];

    return (
      '<footer class="siteFooter">' +
        '<div class="sectionShell">' +

          /* The crisis notice comes first inside the footer: a person looking
             for it is usually scrolling to the bottom of the page. */
          '<aside class="crisisNotice">' +
            '<p><strong data-i18n="crisis.title"></strong></p>' +
            '<p data-i18n="crisis.body"></p>' +
          "</aside>" +

          '<div class="footerTop">' +
            '<div class="footerBrand">' +
              wordmark() +
              '<p class="footerBlurb" data-i18n="brand.footerBlurb"></p>' +
              '<p class="footerBlurb" data-i18n="footer.address"></p>' +
            "</div>" +
            '<div class="footerNavGrid">' +
              footerColumn("footer.navigateTitle", exploreLinks) +
              footerColumn("footer.careTitle", careLinks) +
              footerColumn("footer.programsTitle", programLinks) +
              footerColumn("footer.contactTitle", contactLinks) +
            "</div>" +
          "</div>" +

          '<div class="footerBottom">' +
            '<p class="smallText">' +
              "&copy; <span data-current-year></span> " +
              '<span data-i18n="footer.copyright"></span>' +
            "</p>" +
            /* PLACEHOLDER: privacy policy and terms pages are not written yet,
               so these are inert until the pages exist. */
            '<p class="smallText">' +
              '<span data-i18n="footer.privacy"></span>' +
              "&nbsp;&nbsp;&middot;&nbsp;&nbsp;" +
              '<span data-i18n="footer.terms"></span>' +
            "</p>" +
            '<p class="smallText" data-i18n="footer.legalNote"></p>' +
          "</div>" +

        "</div>" +
      "</footer>"
    );
  }

  /* ======================================================================
     MOUNT
     ====================================================================== */

  function mount() {
    var headerMount = document.querySelector("[data-site-header]");
    var footerMount = document.querySelector("[data-site-footer]");

    if (headerMount) headerMount.outerHTML = headerMarkup();
    if (footerMount) footerMount.outerHTML = footerMarkup();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
