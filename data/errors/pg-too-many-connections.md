---
id: pg-too-many-connections
ecosystem: postgresql
title: "FATAL: sorry, too many clients already / remaining connection slots reserved"
tags: [postgres, connections]
verified: true
last-reviewed: 2026-10-01
---

# FATAL: sorry, too many clients already / remaining connection slots reserved

## Symptom

New DB connections are refused while existing ones work.

## Cause

The app opens more sessions than max_connections (often per-worker connection pools multiplied by replicas), leaving no slots.

## Fix

1. Count usage: SELECT state, count(*) FROM pg_stat_activity GROUP BY 1.
2. Shrink pool sizes or add PgBouncer in transaction mode.
3. Raise max_connections cautiously (RAM per connection).

## Prevention

Size pools as workers x pool_size per service, and always front fleet-wide apps with a connection pooler.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
