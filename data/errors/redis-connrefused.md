---
id: redis-connrefused
ecosystem: redis
title: "Connection refused to 127.0.0.1:6379 (within app) or NOAUTH / WRONGPASS"
tags: [redis, auth]
verified: true
last-reviewed: 2026-10-01
---

# Connection refused to 127.0.0.1:6379 (within app) or NOAUTH / WRONGPASS

## Symptom

Client cannot connect or authenticates incorrectly.

## Cause

Redis is bound to localhost only or not running; protected-mode blocks remote clients without a password; or the app sends AUTH when none is required (or vice versa).

## Fix

1. redis-cli -h <host> ping from the app host.
2. Set bind 0.0.0.0 (behind a firewall) and requirepass for real deployments.
3. Align client password config.

## Prevention

Treat Redis like any DB: firewalled bind addresses, secrets via env, and a startup health check that runs PING.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
