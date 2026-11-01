---
id: helm-release-stuck
ecosystem: kubernetes
title: "release: failed to create: ...in method (0) / another operation (install/upgrade/rollback) is in progress"
tags: [helm, state]
verified: true
last-reviewed: 2026-10-01
---

# release: failed to create: ...in method (0) / another operation (install/upgrade/rollback) is in progress

## Symptom

Helm refuses new operations on a release.

## Cause

A previous install/upgrade was interrupted, leaving the release secret in pending-* state; Helm serializes operations per release.

## Fix

1. helm history <rel> to see the stuck state.
2. helm rollback <rel> <good-ver> or delete the stuck pending secret (kubectl -n <ns> delete secret sh.vN...) as a careful last resort.
3. Re-run the upgrade.

## Prevention

Avoid Ctrl-C during helm operations; set --timeout explicitly so stuck hooks fail fast and clean.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
