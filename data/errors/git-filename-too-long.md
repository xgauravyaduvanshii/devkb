---
id: git-filename-too-long
ecosystem: git
title: "error: unable to create file ...: Filename too long (Windows)"
tags: [git, windows]
verified: true
last-reviewed: 2026-10-01
---

# error: unable to create file ...: Filename too long (Windows)

## Symptom

Checkout fails on deep node_modules or generated paths on Windows.

## Cause

Windows caps classic path length at 260 chars unless long paths are enabled; Git has its own core.longpaths switch.

## Fix

1. git config --global core.longpaths true.
2. Enable the Windows LongPathsEnabled registry policy.
3. Re-run checkout.

## Prevention

Keep repo paths shallow, exclude build output from git, and enable long paths on every Windows dev image.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
