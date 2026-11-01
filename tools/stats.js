#!/usr/bin/env node
// Prints corpus statistics: entries per ecosystem, tag frequency.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'data', 'errors');
const eco = {}; const tags = {};
for (const f of fs.readdirSync(DATA)) {
  const raw = fs.readFileSync(path.join(DATA, f), 'utf8');
  const e = (raw.match(/^ecosystem:\s*(.*)$/m) || [])[1];
  const t = (raw.match(/^tags:\s*\[(.*)\]$/m) || [])[1];
  if (e) eco[e] = (eco[e] || 0) + 1;
  if (t) for (const tag of t.split(',')) tags[tag.trim()] = (tags[tag.trim()] || 0) + 1;
}
console.log('ecosystems:'); Object.entries(eco).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log('  ' + k + ': ' + v));
console.log('top tags:'); Object.entries(tags).sort((a,b)=>b[1]-a[1]).slice(0,15).forEach(([k,v])=>console.log('  ' + k + ': ' + v));
