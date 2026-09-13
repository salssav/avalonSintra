/* Builds the index that tools/photoPicker.html reads.

   Run:  npm run photos
   Then: http://localhost:5173/tools/photoPicker.html

   Re-run it whenever photographs are added to sources/, so the picker shows
   them. It scans every folder under sources/, lists what is already in
   images/, and records which page and line each image is used on. */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

function listImages(dir) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(name => IMAGE.test(name))
    .sort()
    .map(name => dir + '/' + name);
}

/* Every folder under sources/, plus sources/ itself. */
function sourceFolders() {
  const base = path.join(root, 'sources');
  if (!fs.existsSync(base)) return [];
  const subs = fs.readdirSync(base)
    .filter(name => fs.statSync(path.join(base, name)).isDirectory())
    .map(name => 'sources/' + name);
  return ['sources'].concat(subs);
}

const sources = sourceFolders().flatMap(listImages);
const current = listImages('images/house').concat(listImages('images/brand'));

/* Where each image is referenced, as page:line. Keyed by the exact src. */
const slots = {};
for (const page of fs.readdirSync(root).filter(n => n.endsWith('.html'))) {
  const lines = fs.readFileSync(path.join(root, page), 'utf8').split('\n');
  lines.forEach((line, i) => {
    const m = line.match(/<img[^>]*\ssrc="([^"]+)"/);
    if (!m) return;
    const src = decodeURIComponent(m[1]);
    (slots[src] = slots[src] || []).push(page + ':' + (i + 1));
  });
}

const out = { sources, current, slots, generated: new Date().toISOString() };
fs.writeFileSync(path.join(__dirname, 'photoPicker.data.json'), JSON.stringify(out, null, 1));

const used = Object.keys(slots).length;
const unused = current.filter(src => !slots[src]).length;
console.log(
  'photo picker: ' + sources.length + ' in sources/, ' + current.length + ' in images/, ' +
  used + ' referenced by pages, ' + unused + ' unused'
);
