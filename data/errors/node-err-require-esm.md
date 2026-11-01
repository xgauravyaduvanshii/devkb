---
id: node-err-require-esm
ecosystem: nodejs
title: "Error [ERR_REQUIRE_ESM]: require() of ES Module is not supported"
tags: [esm, cjs, nodejs]
verified: true
last-reviewed: 2026-10-01
---

# Error [ERR_REQUIRE_ESM]: require() of ES Module is not supported

## Symptom

A require() call (or a CJS tool like old Jest) loads a dependency that is now pure ESM.

## Cause

The dependency dropped its CJS build. require() cannot synchronously load an ES module with top-level await or export syntax.

## Fix

1. Upgrade the requiring code to import() (async).
2. If a transitive dep caused it, update your direct deps and delete/reinstall node_modules.
3. Last resort: pin the dependency to its last CJS release.

## Prevention

Audit dependencies before updating majors; use tools like 'are-they-esm' lists and prefer dual-build packages.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
