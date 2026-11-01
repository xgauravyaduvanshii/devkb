---
id: linux-too-many-open-files
ecosystem: linux
title: "EMFILE: too many open files / OSError: [Errno 24]"
tags: [linux, limits]
verified: true
last-reviewed: 2026-10-01
---

# EMFILE: too many open files / OSError: [Errno 24]

## Symptom

Long-running services start failing file/socket operations.

## Cause

The per-process fd limit (often 1024) is exhausted by leaked handles, many open sockets, or inotify watches.

## Fix

1. Count fds: ls /proc/<pid>/fd | wc -l.
2. Raise limits (ulimit -n; systemd LimitNOFILE).
3. Fix leaks: close files, pool DB/HTTP connections.

## Prevention

Wrap resource handling in RAII-like helpers (with-blocks, using) and alert on fd counts near the limit.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
