---
id: npm-peer-deps
ecosystem: nodejs
title: "npm ERR! Could not resolve dependency tree / conflicting peer dependency"
tags: [npm, deps]
verified: true
last-reviewed: 2026-10-01
---

# npm ERR! Could not resolve dependency tree / conflicting peer dependency

## Symptom

npm install fails naming a peer dependency conflict between two packages.

## Cause

npm v7+ enforces peer deps strictly: package A needs react ^17 while your app is on react 18, with no compatible version found.

## Fix

1. Read which range conflicts.
2. Update the offending package to a version supporting your core dep.
3. Temporary: --legacy-peer-deps (npm) or overrides in package.json, tracked as debt.

## Prevention

Update majors in dependency order (core frameworks first) and use overrides fields with comments instead of blanket legacy flags.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
