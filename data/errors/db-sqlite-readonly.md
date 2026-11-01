---
id: db-sqlite-readonly
ecosystem: sqlite
title: "attempt to write a readonly database (SQLITE_READONLY) / database is locked"
tags: [sqlite, locking]
verified: true
last-reviewed: 2026-10-01
---

# attempt to write a readonly database (SQLITE_READONLY) / database is locked

## Symptom

Writes fail on a SQLite database that clearly exists.

## Cause

The file or its containing directory is not writable by the process (SQLite needs directory access for journals), or a stale -wal/-shm from a crashed writer holds locks, or the volume is read-only.

## Fix

1. Check ownership/permissions of the .db file AND its directory.
2. Remove leftover -wal/-shm only if no process holds the DB.
3. Run PRAGMA journal_mode=WAL; add busy_timeout in the driver.

## Prevention

Never place SQLite files on network/read-only mounts; grant the service user an owned data directory.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
