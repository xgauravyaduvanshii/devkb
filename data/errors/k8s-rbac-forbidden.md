---
id: k8s-rbac-forbidden
ecosystem: kubernetes
title: "Error from server (Forbidden): pods is forbidden: User cannot list resource in namespace"
tags: [k8s, rbac]
verified: true
last-reviewed: 2026-10-01
---

# Error from server (Forbidden): pods is forbidden: User cannot list resource in namespace

## Symptom

kubectl commands fail with Forbidden although the cluster is reachable.

## Cause

The kubeconfig user/serviceaccount lacks RBAC verbs for that namespace, or you are targeting the wrong context/namespace.

## Fix

1. kubectl auth can-i list pods -n <ns> to test.
2. Have an admin apply a Role/RoleBinding.
3. Switch context: kubectl config use-context.

## Prevention

Generate kubeconfigs per namespace with least privilege and store RBAC as code reviewed in git.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
