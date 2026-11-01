---
id: rust-cargo-lock-race
ecosystem: rust
title: "error: failed to acquire lock on package cache (cargo)"
tags: [rust, cargo]
verified: true
last-reviewed: 2026-10-01
---

# error: failed to acquire lock on package cache (cargo)

## Symptom

Cargo builds fail mentioning the package cache lock.

## Cause

Another cargo process (IDE rust-analyzer, a CI step) holds ~/.cargo/.package-cache; old cargo versions deadlocked on stale locks.

## Fix

1. Check for running cargo (ps).
2. Update cargo: rustup update.
3. Remove the stale lock file only if no cargo runs.

## Prevention

Configure rust-analyzer and build scripts to share a target dir and cache; avoid concurrent cargo in one environment.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
