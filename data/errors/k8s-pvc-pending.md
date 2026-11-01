---
id: k8s-pvc-pending
ecosystem: kubernetes
title: "persistentvolumeclaim staying Pending: no available persistent volumes to bind / storageclass not found"
tags: [k8s, storage]
verified: true
last-reviewed: 2026-10-01
---

# persistentvolumeclaim staying Pending: no available persistent volumes to bind / storageclass not found

## Symptom

PVC never binds and pods waiting on it stay Pending.

## Cause

The StorageClass name is wrong/missing, dynamic provisioning is disabled, or the zone has no matching volume topology.

## Fix

1. kubectl get sc to check the class exists.
2. kubectl describe pvc to read the provisioning event.
3. Match zone annotations / volumeBindingMode WaitForFirstConsumer.

## Prevention

Install the CSI driver before first use and set a default StorageClass in every cluster via IaC.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
