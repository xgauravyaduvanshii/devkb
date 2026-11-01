---
id: pg-scram-auth
ecosystem: postgresql
title: "FATAL: password authentication failed / connection requires SCRAM but server not configured"
tags: [postgres, auth]
verified: true
last-reviewed: 2026-10-01
---

# FATAL: password authentication failed / connection requires SCRAM but server not configured

## Symptom

Login works with one client but fails with another or after a server upgrade.

## Cause

password_encryption changed (md5 vs scram-sha-256) so stored hashes do not match the method the client requests, or the password is genuinely wrong.

## Fix

1. Reset the password after ensuring password_encryption=scram-sha-256 in postgresql.conf.
2. Update pg_hba entries to scram-sha-256.
3. Upgrade old libpq clients that only speak md5.

## Prevention

Standardize on scram-sha-256 everywhere; rotate passwords only via tooling that updates both server and secrets store.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
