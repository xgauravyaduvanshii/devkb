---
id: redis-cli-auth
ecosystem: redis
title: "NOAUTH Authentication required / AUTH failed: invalid password"
tags: [redis, auth]
verified: true
last-reviewed: 2026-10-01
---

# NOAUTH Authentication required / AUTH failed: invalid password

## Symptom

redis-cli connects but every command is refused.

## Cause

The server sets requirepass but the client did not pass -a AUTH or used the wrong ACL user; or a client name was banned.

## Fix

1. redis-cli -a <pass> (or AUTH after connect; prefer -h/-p and REDISCLI_AUTH env).
2. Check requirepass in the running config: CONFIG GET requirepass.
3. For ACL users, connect with --user.

## Prevention

Store Redis credentials in env, never typed history; use ACL users per app instead of the default user.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
