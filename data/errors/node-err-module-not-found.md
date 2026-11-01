---
id: node-err-module-not-found
ecosystem: nodejs
title: "Error [ERR_MODULE_NOT_FOUND]: Cannot find package"
tags: [esm, nodejs]
verified: true
last-reviewed: 2026-10-01
---

# Error [ERR_MODULE_NOT_FOUND]: Cannot find package

## Symptom

ESM import fails with ERR_MODULE_NOT_FOUND even though the package is installed.

## Cause

Node ESM never falls back to CommonJS resolution quirks: the specifier must resolve exactly. Missing exports field, subpath, or a dependency installed in a parent dir causes this.

## Fix

1. Check the package actually exists in node_modules.
2. For deep imports, use the package's documented subpath exports.
3. Verify the specifier extension for relative imports (import './x.js' not './x').

## Prevention

Pin Node >= 18 semantics in CI, and lint relative ESM imports so extensions are always present.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
