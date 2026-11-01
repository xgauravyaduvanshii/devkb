#!/usr/bin/env node
// Builds site/index.json and a static HTML index from data/errors/*.md
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data', 'errors');
const OUT = path.join(__dirname, '..', 'site');

function parse(file) {
  const raw = fs.readFileSync(path.join(DATA, file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (m) for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { id: fm.id, ecosystem: fm.ecosystem, title: JSON.parse(fm.title), tags: fm.tags, body: raw.slice(m ? m[0].length : 0) };
}

function main() {
  if (!fs.existsSync(DATA)) { console.error('no data dir'); process.exit(1); }
  const entries = fs.readdirSync(DATA).filter(f => f.endsWith('.md')).map(parse);
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(entries, null, 2));
  const html = ['<!doctype html><title>devkb</title><h1>devkb — ' + entries.length + ' entries</h1><ul>']
    .concat(entries.map(e => '<li><a href="errors/' + e.id + '.html">' + e.title + '</a></li>'))
    .concat(['</ul>']).join('\n');
  fs.writeFileSync(path.join(OUT, 'index.html'), html);
  console.log('built ' + entries.length + ' entries');
}
main();
