---
id: rust-e0597
ecosystem: rust
title: "error[E0597]: `x` does not live long enough"
tags: [rust, lifetimes]
verified: true
last-reviewed: 2026-10-01
---

# error[E0597]: `x` does not live long enough

## Symptom

A local cannot be borrowed because it would outlive its owner.

## Cause

A reference escapes the scope of the value it points into (returned from fn, stored in a struct that outlives the local).

## Fix

1. Return owned data instead of a borrow.
2. Restructure so the borrow ends within the scope.
3. Consider Rc/Arc or indices into a collection for shared ownership.

## Prevention

Prefer owned types across API boundaries; borrow only inside tight, single-function scopes.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
