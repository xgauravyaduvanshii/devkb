---
id: redis-misconf
ecosystem: redis
title: "MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk"
tags: [redis, disk]
verified: true
last-reviewed: 2026-10-01
---

# MISCONF Redis is configured to save RDB snapshots, but it is currently not able to persist on disk

## Symptom

Writes are rejected with MISCONF while reads still work.

## Cause

BGSAVE failed (disk full, read-only volume, fork memory issues) and stop-writes-on-bgsave-error blocks mutation to avoid silent data loss.

## Fix

1. Check disk and logs: INFO persistence, then redis.log for bgsave errors.
2. Free disk / fix permissions and run BGSAVE until it succeeds.
3. Only set stop-writes-on-bgsave-error no if you accept the risk.

## Prevention

Monitor lastsave age and disk usage; alert long before BGSAVE starts failing.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
