---
id: k8s-crashloopbackoff
ecosystem: kubernetes
title: "Back-off restarting failed container ... CrashLoopBackOff"
tags: [k8s, pods]
verified: true
last-reviewed: 2026-10-01
---

# Back-off restarting failed container ... CrashLoopBackOff

## Symptom

Pod keeps restarting; kubectl describe shows Back-off with increasing delays.

## Cause

The container process exits right after start: crash in entrypoint, bad config/env, failing liveness on boot, or wrong command override.

## Fix

1. kubectl logs <pod> --previous to see the crashing run.
2. Check env/configmap mounts referenced at boot.
3. exec into a fixed image if needed: kubectl run debug --image=<img> -- sh.

## Prevention

Validate manifests with a liveness probe initialDelaySeconds that matches real startup time; test config changes in staging.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
