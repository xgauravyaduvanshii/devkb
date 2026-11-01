---
id: terra-state-lock
ecosystem: devops,terraform
title: "Error acquiring the state lock / LockInfo with operation locked"
tags: [terraform, ci]
verified: true
last-reviewed: 2026-10-01
---

# Error acquiring the state lock / LockInfo with operation locked

## Symptom

terraform plan/apply aborts naming a state lock.

## Cause

A previous run was killed mid-apply leaving a DynamoDB/S3 lock record; concurrent runs then serialize behind a stale lock.

## Fix

1. terraform force-unlock <ID> only after confirming no live run.
2. Prevent collisions with workspace-per-env and CI concurrency groups.
3. Investigate why apply died (OOM/timeout).

## Prevention

Set CI concurrency: group per workspace so parallel pipelines cannot race the same state.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
