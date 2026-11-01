---
id: redis-oom
ecosystem: redis
title: "OOM command not allowed when used memory > 'maxmemory'"
tags: [redis, memory]
verified: true
last-reviewed: 2026-10-01
---

# OOM command not allowed when used memory > 'maxmemory'

## Symptom

Writes fail while the dataset is at the configured cap.

## Cause

maxmemory reached with no eviction (or an eviction policy that cannot free: all keys in-use) — often from unbounded caches or missing TTLs.

## Fix

1. INFO memory to confirm.
2. Add TTLs / delete cold keys.
3. Set maxmemory-policy allkeys-lru for pure caches, or raise maxmemory for datasets.

## Prevention

Every cache key must ship with a TTL; alert on used_memory/maxmemory > 80%.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
