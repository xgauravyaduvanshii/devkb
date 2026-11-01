---
id: k8s-init-crash
ecosystem: kubernetes
title: "Init:Error / Init:CrashLoopBackOff on pod startup"
tags: [k8s, init]
verified: true
last-reviewed: 2026-10-01
---

# Init:Error / Init:CrashLoopBackOff on pod startup

## Symptom

Pod never reaches app containers; an init container fails first.

## Cause

The init container's job (migrate, wait-for-db) failed: image wrong, env missing, or target dependency unreachable; kubectl logs shows the init container explicitly.

## Fix

1. kubectl logs <pod> -c <initcontainer>.
2. Fix its config/deps; remember restartPolicy applies at pod level.
3. Re-apply the manifest after fixes.

## Prevention

Keep init images pinned and their dependencies (DB endpoints) covered by pre-deploy checks.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
