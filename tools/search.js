#!/usr/bin/env node
// CLI search over data/errors frontmatter (title, tags, ecosystem).
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'data', 'errors');

const q = process.argv[2];
if (!q) { console.error('usage: node tools/search.js <query>'); process.exit(1); }
const needle = q.toLowerCase();
let hits = 0;
for (const f of fs.readdirSync(DATA)) {
  const raw = fs.readFileSync(path.join(DATA, f), 'utf8');
  if (raw.toLowerCase().includes(needle)) {
    const title = (raw.match(/^title:\s*(.*)$/m) || [])[1] || f;
    console.log(f + '  —  ' + title);
    hits++;
  }
}
console.error(hits + ' match(es) for "' + q + '"');
process.exit(hits ? 0 : 1);
