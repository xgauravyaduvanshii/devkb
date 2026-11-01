---
id: k8s-imagepullbackoff
ecosystem: kubernetes
title: "ErrImagePull / ImagePullBackOff for image registry/x:tag"
tags: [k8s, registry]
verified: true
last-reviewed: 2026-10-01
---

# ErrImagePull / ImagePullBackOff for image registry/x:tag

## Symptom

Pod stuck pending with pull errors shown in describe pod events.

## Cause

Image tag missing, private registry needs credentials, or the node cannot reach the registry (network policy, no egress).

## Fix

1. Confirm the image exists (docker pull on a workstation).
2. Create/patch imagePullSecrets and the serviceAccount.
3. Check node egress and registry firewall.

## Prevention

Sign images with CI-pushed tags (never latest) and pre-pull critical images on nodes via DaemonSets in large fleets.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
