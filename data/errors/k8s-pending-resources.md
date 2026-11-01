---
id: k8s-pending-resources
ecosystem: kubernetes
title: "0/3 nodes are available: 3 Insufficient cpu. pre-fit failure"
tags: [k8s, scheduling]
verified: true
last-reviewed: 2026-10-01
---

# 0/3 nodes are available: 3 Insufficient cpu. pre-fit failure

## Symptom

Pod stays Pending with scheduling failures about insufficient resources.

## Cause

Requests across pods exceed allocatable capacity on every node, or affinity/taints shrink the eligible node set.

## Fix

1. kubectl describe pod to read the exact predicate failures.
2. Lower requests or delete idle pods.
3. Scale the node pool / enable cluster autoscaler; check taints with kubectl describe node.

## Prevention

Right-size requests with tools like Goldilinks/recommender and keep a cluster headroom dashboard.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
