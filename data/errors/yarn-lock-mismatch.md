---
id: yarn-lock-mismatch
ecosystem: nodejs
title: "error Your lockfile needs to be updated, but it was not changed / CI frozen on yarn install --frozen-lockfile"
tags: [yarn, lockfile]
verified: true
last-reviewed: 2026-10-01
---

# error Your lockfile needs to be updated, but it was not changed / CI frozen on yarn install --frozen-lockfile

## Symptom

CI with --frozen-lockfile fails right after a dependency edit.

## Cause

package.json and yarn.lock drifted: the edit happened without a resolvable, or a different yarn version resolved differently.

## Fix

1. Run yarn install locally to regenerate the lock.
2. Commit yarn.lock.
3. Pin the yarn version via packageManager field (berry).

## Prevention

Enable a CI check that lockfile and manifests are consistent, and a pre-commit hook running install.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
