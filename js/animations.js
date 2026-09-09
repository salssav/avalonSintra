/* ==========================================================================
   AVALON — scroll animation
   --------------------------------------------------------------------------
   GSAP with ScrollTrigger. Deliberately restrained: slow fades, small
   distances, gentle parallax on full-bleed photography. The reference sites
   never feel busy and neither should this.

   Graceful degradation is the important part here. The CSS only hides
   elements when <html> carries the class `gsapReady`, which is added by a
   small inline script in each page's <head>. If GSAP fails to load — offline,
   blocked CDN, JS error — this file removes that class and every element is
   simply visible. The site is never blank because an animation library did
   not arrive.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;

  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  /* If we cannot animate, make absolutely sure nothing stays hidden. */
  if (!hasGsap || prefersReducedMotion) {
    root.classList.remove("gsapReady");
    if (!hasGsap && window.console) {
      console.warn("[avalon] GSAP unavailable — scroll animation disabled, content shown as-is.");
    }
    return;
  }

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  /* ---- Shared timings ---------------------------------------------------- */
  var REVEAL_DURATION = 1.05;
  var REVEAL_DISTANCE = 26;
  var REVEAL_EASE = "power2.out";
  var START_POSITION = "top 86%";

  function run() {
    animateHero();
    animateReveals();
    animateStaggers();
    animateParallax();

    // Fonts and images settle after first paint and change element heights.
    window.addEventListener("load", function () { ScrollTrigger.refresh(); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }

    // Switching language rewrites the copy, so every trigger position moves.
    window.addEventListener("avalonLanguageChanged", function () {
      ScrollTrigger.refresh();
    });
  }

  /* ======================================================================
     HERO — the one entrance animation, on load rather than on scroll
     ====================================================================== */

  function animateHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) return;

    var items = hero.querySelectorAll("[data-hero-item]");
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 22 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1.25,
      ease: REVEAL_EASE,
      stagger: 0.13,
      delay: 0.15
    });
  }

  /* ======================================================================
     REVEALS — a single element fading up as it enters
     ====================================================================== */

  function animateReveals() {
    var items = document.querySelectorAll(".revealItem");

    Array.prototype.forEach.call(items, function (item) {
      // A hero's own items are handled by the entrance animation above.
      if (item.closest("[data-hero]")) {
        gsap.set(item, { opacity: 1 });
        return;
      }

      gsap.fromTo(
        item,
        { opacity: 0, y: REVEAL_DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: REVEAL_DURATION,
          ease: REVEAL_EASE,
          scrollTrigger: {
            trigger: item,
            start: START_POSITION,
            once: true
          }
        }
      );
    });
  }

  /* ======================================================================
     STAGGERS — a group of cards arriving one after another
     ====================================================================== */

  function animateStaggers() {
    var groups = document.querySelectorAll(".revealStagger");

    Array.prototype.forEach.call(groups, function (group) {
      var children = group.children;
      if (!children.length) return;

      gsap.fromTo(
        children,
        { opacity: 0, y: REVEAL_DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: REVEAL_DURATION,
          ease: REVEAL_EASE,
          stagger: 0.11,
          scrollTrigger: {
            trigger: group,
            start: START_POSITION,
            once: true
          }
        }
      );
    });
  }

  /* ======================================================================
     PARALLAX — full-bleed photography drifting slower than the page
     The media layers are set 8–10% taller than their sections in CSS, so
     this movement never exposes an edge.
     ====================================================================== */

  function animateParallax() {
    var layers = document.querySelectorAll("[data-parallax]");

    Array.prototype.forEach.call(layers, function (layer) {
      var section = layer.parentElement;
      if (!section) return;

      var strength = parseFloat(layer.getAttribute("data-parallax")) || 0.14;

      gsap.fromTo(
        layer,
        { yPercent: -strength * 100 },
        {
          yPercent: strength * 100,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      );
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
