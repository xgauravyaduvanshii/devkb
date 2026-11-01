---
id: linux-no-space
ecosystem: linux
title: "No space left on device although df shows free space"
tags: [linux, disk]
verified: true
last-reviewed: 2026-10-01
---

# No space left on device although df shows free space

## Symptom

Writes fail while df looks healthy.

## Cause

Inodes are exhausted (millions of tiny files) or a deleted-but-open file holds space; ext4 reserved blocks confuse percentages.

## Fix

1. df -i to check inodes.
2. Find hoggers: du -xas / | sort -n | tail.
3. lsof +L1 for deleted open files; restart the holder.

## Prevention

Set retention on mail spools/build caches; monitor inode usage beside byte usage.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
