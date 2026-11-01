---
id: mongo-not-authorized
ecosystem: mongodb
title: "Command find failed: not authorized on db to execute command"
tags: [mongodb, rbac]
verified: true
last-reviewed: 2026-10-01
---

# Command find failed: not authorized on db to execute command

## Symptom

A query works locally but fails from the deployed service.

## Cause

The connection user lacks a role on that database (roles are per-db) or authSource is wrong so you authenticated against admin but query appdb.

## Fix

1. db.getUser("svc") to inspect roles.
2. Grant: db.grantRolesToUser with readWrite on the target db.
3. Set authSource properly in the URI.

## Prevention

Ship user/role creation inside migration scripts; keep connection URIs generated from secrets, not hand-written.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
