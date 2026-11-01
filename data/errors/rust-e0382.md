---
id: rust-e0382
ecosystem: rust
title: "error[E0382]: use of moved value: `data`"
tags: [rust, borrowck]
verified: true
last-reviewed: 2026-10-01
---

# error[E0382]: use of moved value: `data`

## Symptom

Compilation fails where a variable is used after being passed by value somewhere.

## Cause

Ownership moved the value; the later use would read from moved-from memory. The compiler prevented a double-free or data race.

## Fix

1. Clone the value if cheap/intended.
2. Pass by reference (&data) to borrow.
3. Restructure so the last use moves.

## Prevention

Design APIs to take &T unless ownership is truly needed; read the 'help:' lines rustc prints — they usually name the right fix.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
