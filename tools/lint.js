#!/usr/bin/env node
// Data linter: every entry must have required frontmatter keys and sections.
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', 'data', 'errors');
const REQUIRED = ['id', 'ecosystem', 'title', 'tags'];
const SECTIONS = ['## Symptom', '## Cause', '## Fix', '## Prevention'];
let bad = 0;
for (const f of fs.readdirSync(DATA)) {
  if (!f.endsWith('.md')) continue;
  const raw = fs.readFileSync(path.join(DATA, f), 'utf8');
  const head = raw.slice(0, raw.indexOf('\n---', 4));
  for (const k of REQUIRED) if (!head.includes(k + ':')) { console.log(f + ': missing key ' + k); bad++; }
  for (const s of SECTIONS) if (!raw.includes(s)) { console.log(f + ': missing section ' + s); bad++; }
  if (f.replace('.md', '') !== (raw.match(/^id:\s*(.*)$/m) || [])[1]) { console.log(f + ': id does not match filename'); bad++; }
}
console.log(bad ? bad + ' problem(s)' : 'data OK');
process.exit(bad ? 1 : 0);
