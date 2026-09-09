# Avalon — website, first draft

A working static site for Avalon, a residential DBT clinic in Sintra. Plain
HTML, CSS and JavaScript. No framework, no build step, no dependencies to
install.

**Open `index.html` in a browser and it runs.**

For a slightly better experience (correct MIME types, no `file://` quirks):

```
node tools/devServer.js
# then open http://localhost:5173
```

---

## The one thing to know

**All site copy lives in `js/content.en.js`.** Nothing is written into the HTML.
The markup carries keys (`data-i18n="home.heroTitle"`) and the copy is looked up
at load. To change wording, edit that one file — you never need to open an HTML
page.

Open items are listed in [PLACEHOLDERS.md](PLACEHOLDERS.md), regenerated with
`node tools/listPlaceholders.js`.

---

## Structure

```
index.html          Home — long scroll, teases each pillar
programs.html       Residence · Day Hospital · Outpatient · Activities · Therapies
treatments.html     BPD · Depression · Anxiety · PTSD
solutions.html      DBT · EMDR · Mindfulness
house.html          Rooms · Common Areas · Outdoor Spaces · Why Sintra
admissions.html     Who it's for · Process · Progress · Join the waitlist
family.html         Resources · Patient access
about.html          Beliefs · Origin · Medical team · Join our team

css/avalon.css      Everything. Design tokens first, then components.
js/content.en.js    All English copy.
js/content.pt.js    All Portuguese copy (placeholders — see below).
js/chrome.js        Header, mobile menu and footer, built once and injected.
js/i18n.js          Renders the active language into the markup.
js/avalon.js        Header scroll state, menu, sub-nav, form validation.
js/animations.js    GSAP + ScrollTrigger reveals and parallax.

images/house/       Web-sized copies of the real photography.
sources/fotosCasa/  The original photographs, untouched.
tools/              Dev server, placeholder index, smoke test.
```

Each sitemap sub-item is a section of its pillar page with its own anchor and a
sticky in-page nav, rather than a separate file. `programs.html#residence` works
as a direct link, and the header and footer menus already use those links.

### Why the header and footer are injected by JavaScript

They are identical on all eight pages. Since the brief requires all copy to live
in JS content objects, every page already needs JavaScript to show any text at
all — so building the shared chrome in `js/chrome.js` costs nothing extra and
means the navigation is defined exactly once. Edit `SITE_NAVIGATION` at the top
of that file and the desktop nav, the mobile drawer and the footer columns all
update together.

*Before launch,* consider pre-rendering the pages (any static site generator, or
a small build script) so the copy is in the HTML for search engines. Google does
execute JavaScript, but server-rendered text is still the safer choice for a
healthcare site.

---

## Common jobs

### Change the brand — colours, fonts, spacing

Everything is a CSS custom property in the `:root` block at the top of
`css/avalon.css`, grouped and commented. Change the values there and the whole
site follows. Nothing anywhere else hardcodes a colour or a font.

The current palette (parchment / stone / ink, with a muted forest green and the
house's own terracotta as accents) and the type pairing (Cormorant Garamond +
Inter) are **working defaults chosen to be replaced**, not proposals.

### Swap in the real logo

The wordmark is a text placeholder. In `js/chrome.js`, in the `wordmark()`
function, replace the inner `<span>` with:

```html
<img src="images/brand/avalonLogo.svg" alt="Avalon">
```

The `.brandWordmark img` rule in the stylesheet already sizes it. One line, one
place, both header and footer.

### Add the Portuguese translation

`js/content.pt.js` is a complete key-for-key mirror of the English file with
every value set to `[PT TRANSLATION PENDING]`. Replace the values; do not rename
or remove keys. Any key missing from Portuguese quietly falls back to English,
so a partial translation still works.

The EN/PT toggle in the header is already wired, remembers the choice in
`localStorage`, and picks up the browser's language on a first visit.

The skeleton was produced by `node tools/generatePortugueseSkeleton.js`. Once
translation has started that script **refuses to run**, so it cannot wipe out
work by accident — add new keys by hand from then on, and use
`node tools/checkContentKeys.js` to see which are missing.

### Drop in new photography

Put the file in `images/house/` and change the `src` in the relevant page. Alt
text is content, so it lives in `js/content.en.js` under `media.*` — please write
a real description, not a filename.

`tools/` has no image pipeline committed, but the working copies in
`images/house/` were resized to 1600px on the long edge (2200px for the hero) at
JPEG quality 72, with EXIF rotation applied. Anything similar is fine.

**Note on the source photographs:** the `.png` files in `sources/fotosCasa/` are
screenshots from an estate agency listing and carry a visible watermark. They are
deliberately **not used**. Everything on the site comes from the clean `.jpg`
photographs. If you want the watermarked angles — the facade from the pool, the
staircase down to the water — they will need to be re-shot or licensed.

Where no real photograph exists yet, the page shows a muted, clearly-labelled
placeholder block (`.mediaPlaceholder`, and the team card photo wells), never
stock photography.

### Connect the forms

Neither the waitlist form nor the clinical-hire form sends anywhere. They
validate, then show the confirmation message; the values are logged to the
browser console.

The wiring point is marked in `js/avalon.js`, in `bindForm()` — the `values`
object is assembled and ready to POST. Keep the confirmation behaviour as it is;
the warmth of that message was deliberate.

---

## What was built in

- **Responsive**, mobile-first. Verified for horizontal overflow at 390px on all
  eight pages.
- **Accessible**: semantic landmarks, real alt text, skip link, visible focus
  rings, labelled form fields with `aria-invalid` and `role="alert"` errors,
  `aria-expanded` on the menu, and full `prefers-reduced-motion` support.
- **Graceful degradation**: scroll-reveal targets are only hidden once JavaScript
  confirms GSAP is present. If the CDN is blocked or offline, `animations.js`
  clears that state and the site renders as a plain, complete document rather
  than a blank page.
- **A crisis notice** in the footer of every page, stating plainly that Avalon is
  not an emergency service and giving Portuguese emergency numbers. *These
  numbers need clinical sign-off.*
- **Visible placeholder markers.** Anywhere the copy is holding text, the page
  shows a small dashed tag. To hide them all for a client-facing view, set
  `display: none` on `.placeholderTag` in `css/avalon.css` (section 4).

## Checks

```
node tools/checkContentKeys.js     # the main one — see below
node tools/listPlaceholders.js     # regenerate the open-items index
```

`checkContentKeys.js` verifies that every `data-i18n` key in the markup exists,
that keys expecting a list actually hold one, that English and Portuguese have
identical key sets, that every image and internal link resolves, that every
`#anchor` points at a real element, and that no content key is left unused. It
exits non-zero on failure, so it can go straight into CI. Run it after any edit
to the content files or the markup.

`tools/smokeTest.html` is a browser-based test of the interactive layer — chrome
injection, the language toggle, the mobile drawer, form validation and the
confirmation state. Serve the site and open
<http://localhost:5173/tools/smokeTest.html>; it runs on load and reports 42
assertions, all currently passing.

## Not in this pass

Per the brief: no pricing, no bed counts, no staff names, no security measures,
no exact schedules, no investor-specific content, and no automatic Portuguese
translation.
