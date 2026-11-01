---
id: sql-too-many-placeholders
ecosystem: database,sql
title: "The SQL contains 0 parameter markers, but the command has 1 parameters total / Prepared statement limit"
tags: [sql, db]
verified: true
last-reviewed: 2026-10-01
---

# The SQL contains 0 parameter markers, but the command has 1 parameters total / Prepared statement limit

## Symptom

Bulk insert with one giant IN(...) or VALUES list fails on parameter limits.

## Cause

SQLite caps host parameters (999 classic, 32766 newer), SQL Server caps ~2100 per statement; MySQL placeholders count against packet limits.

## Fix

1. Chunk the list under the smallest supported limit (use 500 to be safe across engines).
2. Or insert via temp table + INSERT SELECT.
3. Reuse parameter objects where the driver supports batching.

## Prevention

Centralize a chunked-insert helper in the data layer instead of per-feature query building.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
