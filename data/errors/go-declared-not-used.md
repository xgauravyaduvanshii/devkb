---
id: go-declared-not-used
ecosystem: go
title: "error: declared and not used: err"
tags: [go, compiler]
verified: true
last-reviewed: 2026-10-01
---

# error: declared and not used: err

## Symptom

Build fails because a local variable (usually from multi-return) is never read.

## Cause

Go treats unused locals as errors; the underscore pattern is required when discarding values.

## Fix

1. Use _ = err or restructure the if: if _, err := f(); err != nil.
2. Remove the variable if truly pointless.
3. Actually handle the error — the lint is nudging you there.

## Prevention

Enable staticcheck/golangci-lint so shadowed unused errors get flagged as review comments, not build breaks.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
