---
id: rust-e0277
ecosystem: rust
title: "error[E0277]: the trait bound `T: Clone` is not satisfied"
tags: [rust, traits]
verified: true
last-reviewed: 2026-10-01
---

# error[E0277]: the trait bound `T: Clone` is not satisfied

## Symptom

Generic call fails naming an unsatisfied trait bound (often Clone/Default/Sized).

## Cause

The function requires a trait you did not derive on your type, or a where clause is missing for your generic use.

## Fix

1. #[derive(Clone, ...)] on your type.
2. Add the needed bound to the generic: fn f<T: Clone>.
3. Read the note 'required for bound' to find the real culprit.

## Prevention

Derive common traits early on data types and keep constructor helpers generic with explicit bounds.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
