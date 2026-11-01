---
id: linux-inotify-limit
ecosystem: linux
title: "ENOSPC: System limit for number of file watchers reached (chokidar / watch service)"
tags: [linux, fs-watch]
verified: true
last-reviewed: 2026-10-01
---

# ENOSPC: System limit for number of file watchers reached (chokidar / watch service)

## Symptom

File watchers (webpack, vite, IDE sync) fail with ENOSPC naming watchers, unrelated to disk space.

## Cause

fs.inotify.max_user_watches is too low for large projects; each watched dir consumes kernel watches.

## Fix

1. sysctl fs.inotify.max_user_watches=524288 and persist in /etc/sysctl.d/.
2. Reduce watch scope (ignore node_modules, dist).
3. Prefer polling (usePolling) as a last resort.

## Prevention

Set the sysctl in every dev machine bootstrap script; keep ignore globs in tooling config.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
