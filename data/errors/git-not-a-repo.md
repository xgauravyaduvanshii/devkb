---
id: git-not-a-repo
ecosystem: git
title: "fatal: not a git repository (or any of the parent directories): .git"
tags: [git]
verified: true
last-reviewed: 2026-10-01
---

# fatal: not a git repository (or any of the parent directories): .git

## Symptom

Any git command fails from the current directory.

## Cause

You are above/beside the clone, the directory was renamed, or CI ran git without checkout step context.

## Fix

1. cd to the project root.
2. Verify with git rev-parse --show-toplevel.
3. In CI, ensure actions/checkout ran with correct working-directory.

## Prevention

Keep one repo per workspace folder; teach wrappers to resolve the toplevel before acting.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
