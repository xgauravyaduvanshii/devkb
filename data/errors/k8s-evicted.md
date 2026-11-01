---
id: k8s-evicted
ecosystem: kubernetes
title: "Pod was evicted: The node had condition: [DiskPressure]"
tags: [k8s, nodes]
verified: true
last-reviewed: 2026-10-01
---

# Pod was evicted: The node had condition: [DiskPressure]

## Symptom

Pods get Evicted repeatedly on a node; events mention ephemeral-storage or imagefs pressure.

## Cause

Node disk crossed kubelet hard thresholds (logs, emptyDirs, image cache); kubelet evicts pods to reclaim space.

## Fix

1. Clean the node: remove unused images (crictl rmi --prune), truncate container logs.
2. Cap emptyDir sizes.
3. Add ephemeral-storage requests so the scheduler avoids tight nodes.

## Prevention

Centralize log shipping and set alerting on node filesystem usage at 75%.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
