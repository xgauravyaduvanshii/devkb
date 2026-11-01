---
id: docker-no-space-left
ecosystem: docker
title: "no space left on device (while building or pulling)"
tags: [docker, disk]
verified: true
last-reviewed: 2026-10-01
---

# no space left on device (while building or pulling)

## Symptom

Builds/pulls fail though the host disk has free space.

## Cause

Docker's data root (often /var/lib/docker on a small partition) is full of dangling images, build cache, and stopped containers.

## Fix

1. docker system df to inspect.
2. docker system prune -a --volumes after confirming safety.
3. Move the data root to a bigger disk in daemon.json ("data-root").

## Prevention

Schedule nightly prunes on dev machines and set registry retention policies on CI.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
