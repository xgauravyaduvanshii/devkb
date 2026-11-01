---
id: go-import-cycle
ecosystem: go
title: "import cycle not allowed (found packages or import cycle in package X)"
tags: [go, build]
verified: true
last-reviewed: 2026-10-01
---

# import cycle not allowed (found packages or import cycle in package X)

## Symptom

The compiler refuses to build because packages import each other circularly.

## Cause

Go forbids import cycles; a refactor grew a two-way dependency, or tests imported their own package wrongly.

## Fix

1. Break the cycle by extracting shared types into a third package.
2. Move functions behind interfaces defined by the consumer.
3. Inline the small helper that caused the edge.

## Prevention

Layer packages (types -> logic -> app) and forbid upward edges in a CI check (go list analysis).

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
