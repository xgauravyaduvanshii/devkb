const { execFileSync } = require('child_process');
const test = require('node:test');
const assert = require('node:assert');

test('lint passes on the current corpus', () => {
  const out = execFileSync('node', ['tools/lint.js'], { encoding: 'utf8' });
  assert.match(out, /data OK/);
});
