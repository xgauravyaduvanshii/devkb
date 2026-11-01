---
id: web-err-connection-refused
ecosystem: web
title: "net::ERR_CONNECTION_REFUSED"
tags: [http, network]
verified: true
last-reviewed: 2026-10-01
---

# net::ERR_CONNECTION_REFUSED

## Symptom

The browser refuses to connect at all.

## Cause

No process listens on that port/host (server crashed or bound 127.0.0.1 only), the port is wrong, or a firewall REJECTs. Distinct from a timeout (DROP/network).

## Fix

1. From the server: ss -ltnp | grep <port>.
2. Confirm the bind address (0.0.0.0 vs localhost).
3. Test remote: curl from another host; then check security groups/firewall.

## Prevention

Health-check services so crash loops are loud; document the public port mapping table for the team.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
