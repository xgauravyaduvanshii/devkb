---
id: git-index-lock
ecosystem: git
title: "fatal: Unable to create '.git/index.lock': File exists"
tags: [git]
verified: true
last-reviewed: 2026-10-01
---

# fatal: Unable to create '.git/index.lock': File exists

## Symptom

Any git add/commit/checkout fails while index.lock exists.

## Cause

A previous git command crashed (or an IDE git operation was killed) leaving the lock file behind.

## Fix

1. Confirm no git process is running: pgrep git.
2. rm .git/index.lock.
3. Retry the command.

## Prevention

Avoid killing git mid-operation on huge repos; let tooling finish.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
