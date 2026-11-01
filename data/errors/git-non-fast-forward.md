---
id: git-non-fast-forward
ecosystem: git
title: "! [rejected] main -> main (non-fast-forward) git push failed"
tags: [git, push]
verified: true
last-reviewed: 2026-10-01
---

# ! [rejected] main -> main (non-fast-forward) git push failed

## Symptom

git push is rejected with non-fast-forward; the remote has commits you do not have locally.

## Cause

Someone pushed to the same branch, or you rewrote published history locally while the remote kept the old chain.

## Fix

1. git pull --rebase origin main.
2. Resolve conflicts, finish the rebase.
3. Push again. Never reach for --force on shared branches; use --force-with-lease only on your own branches.

## Prevention

Rebase before pushing as a habit (pull.rebase=true) and keep branches short-lived.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
