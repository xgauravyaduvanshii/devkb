---
id: k8s-kubeconfig-refused
ecosystem: kubernetes
title: "The connection to the server localhost:8080 was refused"
tags: [k8s, kubeconfig]
verified: true
last-reviewed: 2026-10-01
---

# The connection to the server localhost:8080 was refused

## Symptom

kubectl tries localhost:8080 on any command.

## Cause

No kubeconfig was provided or KUBECONFIG points at a missing/empty file, so kubectl falls back to in-cluster defaults.

## Fix

1. Export the cluster kubeconfig: mkdir -p ~/.kube && cp <path> ~/.kube/config (or EKS: aws eks update-kubeconfig).
2. Remove stale KUBECONFIG env.
3. Verify kubectl config current-context.

## Prevention

In CI, write the kubeconfig to a temp file and export KUBECONFIG explicitly in the job.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
