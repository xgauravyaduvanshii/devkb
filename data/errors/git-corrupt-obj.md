---
id: git-corrupt-obj
ecosystem: git
title: "error: ...: object is a file - replacing / fatal: bad object / packfile truncated"
tags: [git, integrity]
verified: true
last-reviewed: 2026-10-01
---

# error: ...: object is a file - replacing / fatal: bad object / packfile truncated

## Symptom

Git complains about corrupt objects or truncated packs, often after disk issues or interrupted clone.

## Cause

Filesystem corruption, partial clone, or interrupted gc wrote broken pack files.

## Fix

1. Try git fetch --refetch to repack missing objects.
2. Clone fresh from a healthy remote if the object database is damaged.
3. fsck to confirm: git fsck --full.

## Prevention

Run repos on reliable storage and keep at least one upstream (GitHub) so any local clone can be recreated.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
