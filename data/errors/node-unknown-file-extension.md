---
id: node-unknown-file-extension
ecosystem: nodejs
title: "Error [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension \".mjs\" for ..."
tags: [node, esm, mjs, loader]
verified: true
last-reviewed: 2026-11-01
---

# Error [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".mjs" for ...

## Symptom

Running a script fails immediately, before any of your code executes:

    Error [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".mjs" for /app/index.mjs

Common on Node 12–16 when combining `node --experimental-modules`, a custom
loader, or running a `.mjs` file through a tool that forces the CommonJS loader
(old Jest, ts-node without ESM mode, or `node -r some-hook`).

## Cause

Node only treats `.mjs` as an ES module through the *default* ESM resolver.
Three situations break it:

1. Node < 12.17 (or 10 with `--experimental-modules`, which used different rules)
   does not know the `.mjs` extension at all.
2. A `--require`/loader hook (ts-node, jsdom-global, old tsconfig-paths register)
   hijacks module resolution and the CJS loader sees `.mjs` first.
3. Package `type: "module"` conflicts with a tool that still loads files as CJS.

## Fix

1. Upgrade to Node >= 18; `.mjs` support is stable and the flag soup is gone.
2. Remove stale loader flags: `node -r ts-node/register index.mjs` should become
   `node --loader ts-node/esm index.mjs` (or drop ts-node: run compiled output).
3. If a test runner causes it, pin the runner to an ESM-aware version
   (Jest >= 28 with `extensionsToTreatAsEsm: [".mjs"]`, or switch to vitest).
4. Quick isolation test: `node --input-type=module -e 'console.log(1)'` — if
   that works but the file fails, the problem is your loader chain, not Node.

## Prevention

Keep `engines.node` current in package.json and let CI run the exact Node LTS
the app ships on. When adding loader hooks, add one smoke test that boots the
real entrypoint — extension regressions surface instantly instead of at deploy.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
