---
id: mongo-cursor-timeout
ecosystem: mongodb
title: "Cursor not found, cursor id: ..."
tags: [mongodb, cursors]
verified: true
last-reviewed: 2026-10-01
---

# Cursor not found, cursor id: ...

## Symptom

Long iteration dies mid-fetch.

## Cause

The server timed out an idle cursor (>10 min) between batches while your loop paused, or the driver's batchSize is tiny with slow processing.

## Fix

1. Increase noCursorTimeout? prefer: raise cursor timeout in driver options.
2. Process in queryable batches/sort+limit pagination instead.
3. Keep the loop draining without long pauses.

## Prevention

Paginate with keyset queries for long jobs; do not hold cursors across heavy per-item work.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
