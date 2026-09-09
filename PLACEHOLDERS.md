# Avalon — open items

Everything on this site that is holding text, an unconfirmed fact, or an
unfinished connection. **Generated file — do not edit by hand.** Regenerate with:

```
node tools/listPlaceholders.js
```

Almost all site copy lives in `js/content.en.js`. Editing the copy there is
enough; the HTML does not need to be touched.

---

## 1. Visible on the page

These render as a small dashed **placeholder tag** next to the copy, so they can
be found by reading the site itself. To hide every one of them for a
client-facing view, set `display: none` on `.placeholderTag` in
`css/avalon.css` (section 4).

| Where | Says |
| --- | --- |
| `js/content.en.js:104` | **`footer.address`** — address to confirm |
| `js/content.en.js:108` | **`footer.privacy`** — to follow |
| `js/content.en.js:109` | **`footer.terms`** — to follow |
| `js/content.en.js:118` | **`crisis.body`** — numbers to confirm |
| `js/content.en.js:150` | **`forms.demoNotice`** — backend to connect |
| `js/content.en.js:175` | **`home.heroCaption`** — date to confirm |
| `js/content.en.js:224` | **`home.quoteAttribution`** — quote and attribution pending |
| `js/content.en.js:257` | **`programs.residencePlaceholder`** — to follow |
| `js/content.en.js:266` | **`programs.dayHospitalPlaceholder`** — to follow |
| `js/content.en.js:281` | **`programs.activitiesPlaceholder`** — to follow |
| `js/content.en.js:334` | **`house.roomsPlaceholder`** — to follow |
| `js/content.en.js:343` | **`house.commonAreasPlaceholder`** — to follow |
| `js/content.en.js:392` | **`admissions.processPlaceholder`** — confirm with clinical team before launch |
| `js/content.en.js:412` | **`admissions.progressPlaceholder`** — to confirm |
| `js/content.en.js:577` | **`solutions.dbtAtAvalonPlaceholder`** — to follow |
| `js/content.en.js:593` | **`solutions.emdrAtAvalonPlaceholder`** — to follow |
| `js/content.en.js:605` | **`solutions.mindfulnessPlaceholder`** — to follow |
| `js/content.en.js:634` | **`family.resourcesPlaceholder`** — to follow |
| `js/content.en.js:644` | **`family.accessPlaceholder`** — to follow |
| `js/content.en.js:666` | **`about.beliefsPlaceholder`** — not final copy |
| `js/content.en.js:683` | **`about.originPlaceholder`** — content pending |
| `js/content.en.js:695` | **`about.teamPlaceholder`** — to follow |
| `js/content.en.js:716` | **`about.joinPlaceholder`** — to confirm |

**Total: 23**

---

## 2. Holding text inside content strings

Written as `[PLACEHOLDER: ...]` inside the copy itself.

| Where | Token |
| --- | --- |
| `js/content.en.js:101` | [PLACEHOLDER: email address] |
| `js/content.en.js:102` | [PLACEHOLDER: phone number] |
| `js/content.en.js:681` | [PLACEHOLDER: founding story to be added.] |

**Total: 3**

---

## 3. Notes in the code

Comments marked `PLACEHOLDER:` for whoever picks the project up.

| Where | Note |
| --- | --- |
| `about.html:59` | PLACEHOLDER: draft copy, written from the three commitments in the |
| `about.html:94` | PLACEHOLDER: founding story to be added. No narrative invented. |
| `about.html:116` | PLACEHOLDER: no staff names or photographs yet. The cards below are |
| `about.html:171` | PLACEHOLDER: partner institute, roles and start dates to confirm. |
| `about.html:178` | PLACEHOLDER: not connected to a backend. See js/avalon.js. |
| `admissions.html:89` | PLACEHOLDER: exact operational steps to be confirmed with the clinical team. |
| `admissions.html:139` | PLACEHOLDER: named instruments and intervals to be confirmed. |
| `admissions.html:163` | PLACEHOLDER: this form is not connected to a backend. See the |
| `css/avalon.css:19` | PLACEHOLDER: working palette only. Warm, muted, editorial — parchment, |
| `css/avalon.css:31` | PLACEHOLDER: a single quiet accent (the Serra de Sintra woodland) plus a |
| `css/avalon.css:61` | PLACEHOLDER: working pairing only, not final brand type. |
| `css/avalon.css:306` | "PLACEHOLDER:" comment in the source and a row in PLACEHOLDERS.md. |
| `css/avalon.css:439` | PLACEHOLDER: logo is not final. This is a text-based placeholder wordmark. |
| `family.html:75` | PLACEHOLDER: format, schedule and eligibility of the family programme. |
| `family.html:92` | PLACEHOLDER: specific visiting and communication policy to follow. |
| `house.html:76` | PLACEHOLDER: no room counts or interior specifics until the fit-out is confirmed. |
| `house.html:110` | PLACEHOLDER: final layout and use of the common rooms to follow. |
| `index.html:11` | PLACEHOLDER: working type pairing only, not final brand type. |
| `index.html:244` | PLACEHOLDER: quote text and attribution are holding copy. |
| `js/avalon.js:170` | PLACEHOLDER: no backend is connected. Submission is intercepted, the |
| `js/avalon.js:201` | PLACEHOLDER: replace with a real submission when a backend exists. |
| `js/chrome.js:109` | PLACEHOLDER: logo not final. The wordmark below is a text placeholder. |
| `js/chrome.js:259` | PLACEHOLDER: privacy policy and terms pages are not written yet, |
| `js/content.en.js:11` | string itself AND with a "PLACEHOLDER:" comment on the line above, so both |
| `js/content.en.js:31` | PLACEHOLDER: logo not final. This text wordmark stands in for it. |
| `js/content.en.js:100` | PLACEHOLDER: confirm the public contact address and phone number before launch. |
| `js/content.en.js:103` | PLACEHOLDER: confirm the street address to publish, if any, during renovation. |
| `js/content.en.js:107` | PLACEHOLDER: privacy policy and terms pages to be drafted before launch. |
| `js/content.en.js:115` | PLACEHOLDER: confirm these numbers with the clinical team before launch. |
| `js/content.en.js:135` | PLACEHOLDER: specialty list to be confirmed with the clinical team. |
| `js/content.en.js:148` | PLACEHOLDER: no form backend is connected yet. Submissions are handled |
| `js/content.en.js:174` | PLACEHOLDER: opening date not confirmed. |
| `js/content.en.js:221` | PLACEHOLDER: founder quote is holding text. To be written or approved by |
| `js/content.en.js:255` | PLACEHOLDER: no bed count, room detail, length of stay or daily schedule |
| `js/content.en.js:265` | PLACEHOLDER: exact schedule to follow. |
| `js/content.en.js:280` | PLACEHOLDER: no specific activities list yet. |
| `js/content.en.js:328` | PLACEHOLDER: no room counts, room types, or interior specifics until the |
| `js/content.en.js:338` | PLACEHOLDER: general only until the renovation is complete. |
| `js/content.en.js:389` | PLACEHOLDER: the operational detail of each step — who leads it, how long |
| `js/content.en.js:410` | PLACEHOLDER: the specific instruments and measurement intervals to be |
| `js/content.en.js:472` | PLACEHOLDER: mortality and suicide data appears once, gently, with a |
| `js/content.en.js:575` | PLACEHOLDER: keep DBT-at-Avalon general until staffing and programme |
| `js/content.en.js:589` | PLACEHOLDER: EMDR provision at Avalon is not yet detailed. |
| `js/content.en.js:603` | PLACEHOLDER: specific mindfulness and wellness offering intentionally |
| `js/content.en.js:632` | PLACEHOLDER: the exact family programme — format, length, whether it runs |
| `js/content.en.js:638` | PLACEHOLDER: specific visiting and communication policy to follow. |
| `js/content.en.js:663` | PLACEHOLDER: draft copy, written from the three commitments in the |
| `js/content.en.js:679` | PLACEHOLDER: founding story to be added. Do not invent a narrative. |
| `js/content.en.js:688` | PLACEHOLDER: no staff names, photographs or biographies until |
| `js/content.en.js:714` | PLACEHOLDER: partner institute to be named once the agreement is public; |
| `programs.html:78` | PLACEHOLDER: no bed count, room detail or schedule until confirmed. |
| `programs.html:97` | PLACEHOLDER: exact schedule to follow. |
| `programs.html:126` | PLACEHOLDER: no specific activities list yet. |
| `solutions.html:114` | PLACEHOLDER: programme structure and team detail to follow. |
| `solutions.html:146` | PLACEHOLDER: EMDR provision at Avalon not yet detailed. |
| `solutions.html:167` | PLACEHOLDER: schedule and practitioners to follow. |
| `treatments.html:109` | PLACEHOLDER: risk framing appears exactly once on this page, gently |

**Total: 57**

---

## Before launch — the short list

1. **Brand.** Logo, palette and typefaces are all working defaults. Colours and
   fonts are CSS variables at the top of `css/avalon.css`; the wordmark is one
   line in `js/chrome.js`.
2. **Portuguese translation.** `js/content.pt.js` mirrors every English key with
   `[PT TRANSLATION PENDING]`. The toggle already works.
3. **Forms.** Neither form sends anywhere. Wiring point is marked in
   `js/avalon.js` (`bindForm`).
4. **Founder quote and founding story.** Both holding text, on purpose.
5. **Clinical sign-off.** Admission steps, outcome measures, the crisis-line
   numbers, and the BPD risk paragraph should all be read by the clinical team.
6. **Contact details.** Email, phone and whether to publish a street address.
7. **Privacy policy and terms.** Linked in the footer but not written.
