/* ==========================================================================
   Regenerates PLACEHOLDERS.md by scanning the project for open items.
   Run:  node tools/listPlaceholders.js

   It finds three things:
     1. "PLACEHOLDER:" comments in the source (CSS, JS, HTML)
     2. "[PLACEHOLDER: ...]" tokens inside content strings
     3. "<ph>...</ph>" tags, which render as the dashed marker on the page
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    // `tools` is this tooling, not site content; its own examples would
    // otherwise show up as findings.
    if (['images', 'sources', 'node_modules', '.git', 'tools'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|css|js)$/.test(entry.name) && !entry.name.startsWith('__')) files.push(full);
  }
}
walk(root);

// Lines that only *describe* the placeholder convention rather than mark a real
// open item — the file-header documentation blocks.
const DOCUMENTATION = /token <ph>|The token|marker like|Every open item|using a single consistent|renders as the small dashed|inside the string itself/i;

const comments = [];
const tokens = [];
const tags = [];

for (const file of files.sort()) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const lines = fs.readFileSync(file, 'utf8').split('\n');

  // Track which top-level content group we are inside, so a bare "to follow"
  // can be reported as e.g. `solutions.emdrAtAvalonPlaceholder`.
  let group = '';

  lines.forEach((line, i) => {
    const n = i + 1;

    const groupMatch = line.match(/^  ([A-Za-z][A-Za-z0-9]*): \{/);
    if (groupMatch) group = groupMatch[1];

    if (DOCUMENTATION.test(line)) return;

    if (/PLACEHOLDER:/.test(line) && !/\[PLACEHOLDER:/.test(line)) {
      comments.push({
        rel, n,
        text: line.replace(/^\s*(\/\*|\*|\/\/|<!--)?\s*/, '').replace(/(\*\/|-->)\s*$/, '').trim()
      });
    }

    const tokenMatch = line.match(/\[PLACEHOLDER:([^\]]*)\]/g);
    if (tokenMatch) tokenMatch.forEach(t => tokens.push({ rel, n, text: t }));

    const tagMatch = line.match(/<ph>([^<]*)<\/ph>/g);
    if (tagMatch) {
      const property = (line.match(/^\s*([A-Za-z0-9_]+)\s*:/) || [])[1];
      const key = property ? (group ? group + '.' + property : property) : '';
      tagMatch.forEach(t => tags.push({
        rel, n,
        text: (key ? '**`' + key + '`** — ' : '') + t.replace(/<\/?ph>/g, '')
      }));
    }
  });
}

const table = rows => rows.map(r => `| \`${r.rel}:${r.n}\` | ${r.text.replace(/\|/g, '\\|')} |`).join('\n');

const md = `# Avalon — open items

Everything on this site that is holding text, an unconfirmed fact, or an
unfinished connection. **Generated file — do not edit by hand.** Regenerate with:

\`\`\`
node tools/listPlaceholders.js
\`\`\`

Almost all site copy lives in \`js/content.en.js\`. Editing the copy there is
enough; the HTML does not need to be touched.

---

## 1. Visible on the page

These render as a small dashed **placeholder tag** next to the copy, so they can
be found by reading the site itself. To hide every one of them for a
client-facing view, set \`display: none\` on \`.placeholderTag\` in
\`css/avalon.css\` (section 4).

| Where | Says |
| --- | --- |
${table(tags)}

**Total: ${tags.length}**

---

## 2. Holding text inside content strings

Written as \`[PLACEHOLDER: ...]\` inside the copy itself.

| Where | Token |
| --- | --- |
${table(tokens)}

**Total: ${tokens.length}**

---

## 3. Notes in the code

Comments marked \`PLACEHOLDER:\` for whoever picks the project up.

| Where | Note |
| --- | --- |
${table(comments)}

**Total: ${comments.length}**

---

## Before launch — the short list

1. **Brand.** Logo, palette and typefaces are all working defaults. Colours and
   fonts are CSS variables at the top of \`css/avalon.css\`; the wordmark is one
   line in \`js/chrome.js\`.
2. **Portuguese translation.** \`js/content.pt.js\` mirrors every English key with
   \`[PT TRANSLATION PENDING]\`. The toggle already works.
3. **Forms.** Neither form sends anywhere. Wiring point is marked in
   \`js/avalon.js\` (\`bindForm\`).
4. **Founder quote and founding story.** Both holding text, on purpose.
5. **Clinical sign-off.** Admission steps, outcome measures, the crisis-line
   numbers, and the BPD risk paragraph should all be read by the clinical team.
6. **Contact details.** Email, phone and whether to publish a street address.
7. **Privacy policy and terms.** Linked in the footer but not written.
`;

fs.writeFileSync(path.join(root, 'PLACEHOLDERS.md'), md, 'utf8');
console.log(`PLACEHOLDERS.md written — ${tags.length} visible, ${tokens.length} tokens, ${comments.length} code notes`);
