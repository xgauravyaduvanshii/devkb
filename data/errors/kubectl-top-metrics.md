---
id: kubectl-top-metrics
ecosystem: kubernetes
title: "error: Metrics API not available / Metrics API could not be found"
tags: [k8s, observability]
verified: true
last-reviewed: 2026-10-01
---

# error: Metrics API not available / Metrics API could not be found

## Symptom

kubectl top fails although nodes and pods exist.

## Cause

The metrics-server addon is missing or cannot schedule (no auth delegation, tainted nodes, or it crashed on startup).

## Fix

1. kubectl get deploy -n kube-system metrics-server.
2. Apply/re-apply the addon manifest with --kubelet-insecure-tls where certs are self-signed.
3. Wait 1-2 scrape intervals.

## Prevention

Install metrics-server as part of cluster bootstrap IaC; alert if its deployment is absent.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
