/* ==========================================================================
   Consistency check for the whole site. Run:  node tools/checkContentKeys.js

   Verifies that:
     1. every data-i18n key used in the markup exists in content.en.js
     2. keys expecting an array (data-i18n-paras / -list) actually hold one
     3. content.pt.js has exactly the same keys as content.en.js
     4. every image referenced by the markup exists on disk
     5. every internal link points at a real file
     6. every #anchor points at a real element id
     7. no content key is defined but unused

   Exits non-zero if anything is wrong, so it can be wired into CI later.
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

global.window = {};
require(path.join(root, 'js/content.en.js'));
require(path.join(root, 'js/content.pt.js'));
const en = global.window.avalonContent.en;
const pt = global.window.avalonContent.pt;

/* ---- helpers ----------------------------------------------------------- */

function lookup(dictionary, key) {
  let value = dictionary;
  for (const part of key.split('.')) {
    if (value === null || typeof value !== 'object') return undefined;
    value = value[part];
  }
  return value;
}

function flatten(obj, prefix = '') {
  return Object.keys(obj).flatMap(key => {
    const value = obj[key];
    const full = prefix ? prefix + '.' + key : key;
    return value && typeof value === 'object' && !Array.isArray(value)
      ? flatten(value, full)
      : [full];
  });
}

const pages = fs.readdirSync(root).filter(f => f.endsWith('.html') && !f.startsWith('__'));
const sources = pages.map(f => [f, fs.readFileSync(path.join(root, f), 'utf8')]);
for (const jsFile of ['js/chrome.js', 'js/avalon.js']) {
  sources.push([jsFile, fs.readFileSync(path.join(root, jsFile), 'utf8')]);
}

const problems = [];
const usedKeys = new Set();

/* ---- 1 & 2: keys used in markup ---------------------------------------- */

const ATTRIBUTES = {
  'data-i18n': 'string',
  'data-i18n-alt': 'string',
  'data-i18n-placeholder': 'string',
  'data-i18n-aria': 'string',
  'data-i18n-content': 'string',
  'data-i18n-paras': 'array',
  'data-i18n-list': 'array'
};

for (const [file, src] of sources) {
  for (const [attribute, expected] of Object.entries(ATTRIBUTES)) {
    const pattern = new RegExp(attribute + '="([^"]+)"', 'g');
    let match;
    while ((match = pattern.exec(src))) {
      const key = match[1];
      if (key.indexOf('+') !== -1) continue; // JS template concatenation
      usedKeys.add(key);

      const value = lookup(en, key);
      if (value === undefined) {
        problems.push(`missing key: ${file} ${attribute}="${key}"`);
        continue;
      }
      const isArray = Array.isArray(value);
      if (expected === 'array' && !isArray) problems.push(`${file}: ${attribute}="${key}" should be an array`);
      if (expected === 'string' && isArray) problems.push(`${file}: ${attribute}="${key}" should be a string`);
    }
  }
}

/* Keys referenced from JavaScript rather than markup. */
const jsSource = ['js/chrome.js', 'js/avalon.js']
  .map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');
for (const pattern of [/(?:labelKey|titleKey)\s*:\s*"([^"]+)"/g, /resolve\(\s*"([^"]+)"\s*\)/g, /footerColumn\(\s*"([^"]+)"/g]) {
  let match;
  while ((match = pattern.exec(jsSource))) {
    usedKeys.add(match[1]);
    if (lookup(en, match[1]) === undefined) problems.push(`missing key referenced from JS: ${match[1]}`);
  }
}
// Built dynamically at runtime.
['nav.openMenu', 'nav.closeMenu', 'forms.errorRequired', 'forms.errorEmail', 'forms.errorSelect']
  .forEach(key => {
    usedKeys.add(key);
    if (lookup(en, key) === undefined) problems.push(`missing runtime key: ${key}`);
  });

/* ---- 3: EN / PT parity -------------------------------------------------- */

const enKeys = flatten(en).sort();
const ptKeys = flatten(pt).sort();
enKeys.filter(k => !ptKeys.includes(k)).forEach(k => problems.push(`key missing from content.pt.js: ${k}`));
ptKeys.filter(k => !enKeys.includes(k)).forEach(k => problems.push(`key only in content.pt.js: ${k}`));

/* ---- 4: images ---------------------------------------------------------- */

// Comments contain example markup — the logo-swap instructions reference an
// SVG that deliberately does not exist yet — so strip them before scanning.
function stripComments(file, src) {
  if (file.endsWith('.js')) return src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  if (file.endsWith('.html')) return src.replace(/<!--[\s\S]*?-->/g, '');
  return src;
}

for (const [file, src] of sources) {
  const code = stripComments(file, src);
  const pattern = /src="(images\/[^"]+)"/g;
  let match;
  while ((match = pattern.exec(code))) {
    if (!fs.existsSync(path.join(root, match[1]))) problems.push(`missing image: ${file} -> ${match[1]}`);
  }
}

/* ---- 5 & 6: links and anchors ------------------------------------------ */

for (const [file, src] of sources) {
  if (!file.endsWith('.html')) continue;

  let match;
  const linkPattern = /href="([^"#][^"]*?)(#[^"]*)?"/g;
  while ((match = linkPattern.exec(src))) {
    const target = match[1];
    if (/^(https?:|mailto:|tel:)/.test(target)) continue;
    if (!fs.existsSync(path.join(root, target))) problems.push(`broken link: ${file} -> ${target}`);
  }

  const anchorPattern = /href="([a-zA-Z]+\.html)?#([A-Za-z][\w-]*)"/g;
  while ((match = anchorPattern.exec(src))) {
    const page = match[1] || file;
    if (!pages.includes(page)) continue;
    const target = fs.readFileSync(path.join(root, page), 'utf8');
    if (!new RegExp('id="' + match[2] + '"').test(target)) {
      problems.push(`broken anchor: ${file} -> ${page}#${match[2]}`);
    }
  }
}

/* ---- 7: unused keys ----------------------------------------------------- */

const unused = enKeys.filter(k => !usedKeys.has(k));
unused.forEach(k => problems.push(`unused content key: ${k}`));

/* ---- report ------------------------------------------------------------- */

console.log(`Pages: ${pages.length}   English keys: ${enKeys.length}   Portuguese keys: ${ptKeys.length}`);

if (problems.length === 0) {
  console.log('All checks passed.');
  process.exit(0);
}

console.error(`\n${problems.length} problem(s):`);
problems.forEach(p => console.error('  ' + p));
process.exit(1);
