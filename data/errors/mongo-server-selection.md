---
id: mongo-server-selection
ecosystem: mongodb
title: "MongoServerSelectionError: connection timed out / Server selection timeout 30000ms"
tags: [mongodb, network]
verified: true
last-reviewed: 2026-10-01
---

# MongoServerSelectionError: connection timed out / Server selection timeout 30000ms

## Symptom

Driver hangs 30s then fails before any operation.

## Cause

The URI (often an Atlas SRV record) cannot reach the nodes: IP not whitelisted, DNS blocked, or only a private network route exists.

## Fix

1. Test DNS: dig +short _mongodb._tcp.<host>.
2. Add the app's egress IP to the Atlas network access list.
3. Check firewalls to port 27017.

## Prevention

Run 'connect' smoke tests in deploys and pin atlas private endpoint networking in IaC.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
