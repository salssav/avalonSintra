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
| `js/content.en.js:105` | **`footer.address`** — address to confirm |
| `js/content.en.js:109` | **`footer.privacy`** — to follow |
| `js/content.en.js:110` | **`footer.terms`** — to follow |
| `js/content.en.js:119` | **`crisis.body`** — numbers to confirm |
| `js/content.en.js:151` | **`forms.demoNotice`** — backend to connect |
| `js/content.en.js:176` | **`home.heroCaption`** — date to confirm |
| `js/content.en.js:225` | **`home.quoteAttribution`** — quote and attribution pending |
| `js/content.en.js:275` | **`programs.residencePlaceholder`** — to follow |
| `js/content.en.js:286` | **`programs.dayHospitalPlaceholder`** — to follow |
| `js/content.en.js:301` | **`programs.activitiesPlaceholder`** — to follow |
| `js/content.en.js:354` | **`house.roomsPlaceholder`** — to follow |
| `js/content.en.js:363` | **`house.commonAreasPlaceholder`** — to follow |
| `js/content.en.js:470` | **`admissions.progressPlaceholder`** — to confirm |
| `js/content.en.js:643` | **`solutions.dbtAtAvalonPlaceholder`** — to follow |
| `js/content.en.js:668` | **`solutions.emdrAtAvalonPlaceholder`** — to follow |
| `js/content.en.js:680` | **`solutions.mindfulnessPlaceholder`** — to follow |
| `js/content.en.js:687` | **`solutions.offerMeditationText`** — to follow |
| `js/content.en.js:689` | **`solutions.offerYogaText`** — to follow |
| `js/content.en.js:691` | **`solutions.offerWorkshopsText`** — to follow |
| `js/content.en.js:720` | **`family.resourcesPlaceholder`** — to follow |
| `js/content.en.js:730` | **`family.accessPlaceholder`** — to follow |
| `js/content.en.js:761` | **`about.originPlaceholder`** — content pending |
| `js/content.en.js:773` | **`about.teamPlaceholder`** — to follow |
| `js/content.en.js:794` | **`about.joinPlaceholder`** — to confirm |

**Total: 24**

---

## 2. Holding text inside content strings

Written as `[PLACEHOLDER: ...]` inside the copy itself.

| Where | Token |
| --- | --- |
| `js/content.en.js:102` | [PLACEHOLDER: email address] |
| `js/content.en.js:103` | [PLACEHOLDER: phone number] |
| `js/content.en.js:759` | [PLACEHOLDER: founding story to be added.] |

**Total: 3**

---

## 3. Notes in the code

Comments marked `PLACEHOLDER:` for whoever picks the project up.

| Where | Note |
| --- | --- |
| `about.html:75` | PLACEHOLDER: founding story to be added. No narrative invented. |
| `about.html:97` | PLACEHOLDER: no staff names or photographs yet. The cards below are |
| `about.html:152` | PLACEHOLDER: partner institute, roles and start dates to confirm. |
| `about.html:159` | PLACEHOLDER: not connected to a backend. See js/avalon.js. |
| `admissions.html:188` | PLACEHOLDER: named instruments and intervals to be confirmed. |
| `admissions.html:212` | PLACEHOLDER: this form is not connected to a backend. See the |
| `css/avalon.css:19` | PLACEHOLDER: working palette only. Warm, muted, editorial — parchment, |
| `css/avalon.css:31` | PLACEHOLDER: a single quiet accent (the Serra de Sintra woodland) plus a |
| `css/avalon.css:61` | PLACEHOLDER: working pairing only, not final brand type. |
| `css/avalon.css:306` | "PLACEHOLDER:" comment in the source and a row in PLACEHOLDERS.md. |
| `family.html:75` | PLACEHOLDER: format, schedule and eligibility of the family programme. |
| `family.html:92` | PLACEHOLDER: specific visiting and communication policy to follow. |
| `house.html:76` | PLACEHOLDER: no room counts or interior specifics until the fit-out is confirmed. |
| `house.html:110` | PLACEHOLDER: final layout and use of the common rooms to follow. |
| `index.html:11` | PLACEHOLDER: working type pairing only, not final brand type. |
| `index.html:244` | PLACEHOLDER: quote text and attribution are holding copy. |
| `js/avalon.js:170` | PLACEHOLDER: no backend is connected. Submission is intercepted, the |
| `js/avalon.js:201` | PLACEHOLDER: replace with a real submission when a backend exists. |
| `js/chrome.js:260` | PLACEHOLDER: privacy policy and terms pages are not written yet, |
| `js/content.en.js:11` | string itself AND with a "PLACEHOLDER:" comment on the line above, so both |
| `js/content.en.js:101` | PLACEHOLDER: confirm the public contact address and phone number before launch. |
| `js/content.en.js:104` | PLACEHOLDER: confirm the street address to publish, if any, during renovation. |
| `js/content.en.js:108` | PLACEHOLDER: privacy policy and terms pages to be drafted before launch. |
| `js/content.en.js:116` | PLACEHOLDER: confirm these numbers with the clinical team before launch. |
| `js/content.en.js:136` | PLACEHOLDER: specialty list to be confirmed with the clinical team. |
| `js/content.en.js:149` | PLACEHOLDER: no form backend is connected yet. Submissions are handled |
| `js/content.en.js:175` | PLACEHOLDER: opening date not confirmed. |
| `js/content.en.js:222` | PLACEHOLDER: founder quote is holding text. To be written or approved by |
| `js/content.en.js:273` | PLACEHOLDER: no bed count, length of stay or daily timetable until |
| `js/content.en.js:285` | PLACEHOLDER: exact schedule to follow. |
| `js/content.en.js:300` | PLACEHOLDER: no specific activities list yet. |
| `js/content.en.js:348` | PLACEHOLDER: no room counts, room types, or interior specifics until the |
| `js/content.en.js:358` | PLACEHOLDER: general only until the renovation is complete. |
| `js/content.en.js:468` | PLACEHOLDER: the specific instruments and measurement intervals to be |
| `js/content.en.js:529` | PLACEHOLDER: mortality and suicide data appears once, gently, with a |
| `js/content.en.js:641` | PLACEHOLDER: keep DBT-at-Avalon general until staffing and programme |
| `js/content.en.js:667` | PLACEHOLDER: named EMDR clinicians and staffing still to be confirmed. |
| `js/content.en.js:678` | PLACEHOLDER: specific mindfulness and wellness offering intentionally |
| `js/content.en.js:684` | PLACEHOLDER: the three offers below are named but not yet described. |
| `js/content.en.js:718` | PLACEHOLDER: the exact family programme — format, length, whether it runs |
| `js/content.en.js:724` | PLACEHOLDER: specific visiting and communication policy to follow. |
| `js/content.en.js:757` | PLACEHOLDER: founding story to be added. Do not invent a narrative. |
| `js/content.en.js:766` | PLACEHOLDER: no staff names, photographs or biographies until |
| `js/content.en.js:792` | PLACEHOLDER: partner institute to be named once the agreement is public; |
| `programs.html:125` | PLACEHOLDER: no bed count or length of stay until confirmed. |
| `programs.html:144` | PLACEHOLDER: exact schedule to follow. |
| `programs.html:173` | PLACEHOLDER: no specific activities list yet. |
| `solutions.html:114` | PLACEHOLDER: programme structure and team detail to follow. |
| `solutions.html:151` | PLACEHOLDER: named EMDR clinicians still to be confirmed. |
| `solutions.html:171` | PLACEHOLDER: schedule and practitioners to follow. |
| `solutions.html:177` | PLACEHOLDER: the three offers are named but not yet described. |
| `treatments.html:110` | PLACEHOLDER: risk framing appears exactly once on this page, gently |

**Total: 55**

---

## Before launch — the short list

1. **Brand.** The logo is final; palette and typefaces are still working
   defaults. Colours and fonts are CSS variables at the top of `css/avalon.css`.
2. **Portuguese translation.** `js/content.pt.js` mirrors every English key with
   `[PT TRANSLATION PENDING]`. The toggle already works.
3. **Forms.** Neither form sends anywhere. Wiring point is marked in
   `js/avalon.js` (`bindForm`).
4. **Founder quote and founding story.** Both holding text, on purpose.
5. **Clinical sign-off.** Admission steps, outcome measures, the crisis-line
   numbers, and the BPD risk paragraph should all be read by the clinical team.
6. **Contact details.** Email, phone and whether to publish a street address.
7. **Privacy policy and terms.** Linked in the footer but not written.
