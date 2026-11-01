---
id: ts-strict-null
ecosystem: typescript
title: "error TS2533/TS18048: 'x' is possibly 'null' or 'undefined'"
tags: [typescript, strict]
verified: true
last-reviewed: 2026-10-01
---

# error TS2533/TS18048: 'x' is possibly 'null' or 'undefined'

## Symptom

Strict null checks reject values that used to pass.

## Cause

strictNullChecks surfaced real unhandled null paths: API shapes, optional chaining gaps, or Map/Object lookups returning undefined.

## Fix

1. Guard: if (!x) return/throw.
2. Use x?.y with a fallback ?? .
3. Only use non-null assertion ! when an invariant truly guarantees it.

## Prevention

Type API responses with runtime validators (zod) so unknowns become checked data instead of null surprises.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
