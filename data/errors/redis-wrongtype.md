---
id: redis-wrongtype
ecosystem: redis
title: "WRONGTYPE Operation against a key holding the wrong kind of value"
tags: [redis, types]
verified: true
last-reviewed: 2026-10-01
---

# WRONGTYPE Operation against a key holding the wrong kind of value

## Symptom

A GET/HGETALL-type command fails on an existing key.

## Cause

The key exists as a different type than the command expects — two code paths reused the same key name for a string vs hash, or an old schema version lingers.

## Fix

1. TYPE <key> to inspect.
2. DEL the stale key or migrate to a versioned prefix.
3. Make key naming include the type (user:{id}:hash style).

## Prevention

Prefix keys by purpose (app:entity:id) and version namespaces so type collisions are impossible across features.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
