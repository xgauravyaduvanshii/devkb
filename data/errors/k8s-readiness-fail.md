---
id: k8s-readiness-fail
ecosystem: kubernetes
title: "Readiness probe failed: HTTP request to /healthz on port 8080 failed: connection refused"
tags: [k8s, probes]
verified: true
last-reviewed: 2026-10-01
---

# Readiness probe failed: HTTP request to /healthz on port 8080 failed: connection refused

## Symptom

Service endpoints empty; pods Ready=false although not crashing.

## Cause

The probe path/port does not match what the app serves, or startup is slower than the probe allows so it fails during boot.

## Fix

1. curl the endpoint from inside the pod to find the real path/port.
2. Add startupProbe for slow boot.
3. Tune failureThreshold/periodSeconds.

## Prevention

Mirror probe config from app code in review checklists; use startupProbe instead of stretching liveness delays.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
