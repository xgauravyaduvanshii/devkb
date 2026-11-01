---
id: pnpm-hoist
ecosystem: nodejs
title: "Cannot find module X although it is in dependencies (pnpm strict node_modules)"
tags: [pnpm, node]
verified: true
last-reviewed: 2026-10-01
---

# Cannot find module X although it is in dependencies (pnpm strict node_modules)

## Symptom

Code imports a package that was never declared as a direct dependency; it worked under npm hoisting but pnpm's isolated layout hides it.

## Cause

Undeclared (phantom) dependency: you relied on transitive packages being flattened into node_modules.

## Fix

1. Add the missing package to package.json explicitly.
2. Optionally loosen isolation with .npmrc public-hoist-pattern as a stopgap.

## Prevention

Enable eslint-plugin-import/no-extraneous-dependencies so phantom imports fail review.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
