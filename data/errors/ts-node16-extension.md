---
id: ts-node16-extension
ecosystem: typescript
title: "error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16'"
tags: [typescript, esm]
verified: true
last-reviewed: 2026-10-01
---

# error TS2835: Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16'

## Symptom

Every relative import errors after switching to NodeNext.

## Cause

Node ESM resolution requires the real output extension (.js) in specifiers even though sources are .ts; TS tells you explicitly.

## Fix

1. Rewrite specifiers to .js extensions (tsc will map to .ts).
2. Automate with codemods or a bundler resolution (set moduleResolution bundler if you bundle).
3. Enable ts-replace-postfix? keep simple: add allowImportingTsExtensions only when emitting with a bundler.

## Prevention

Pick ESM output early and adopt editor quick-fix 'add extension' so the habit lands per file.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
