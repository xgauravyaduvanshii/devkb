---
id: pg-deadlock-detected
ecosystem: postgresql
title: "ERROR: deadlock detected (SQLSTATE 40P01)"
tags: [postgres, transactions]
verified: true
last-reviewed: 2026-10-01
---

# ERROR: deadlock detected (SQLSTATE 40P01)

## Symptom

Two transactions kill each other mid-work with deadlock errors.

## Cause

Each transaction locks rows the other needs, in opposite order (classic: updating child then parent vs parent then child).

## Fix

1. Read the deadlock detail in the server log: it names the racing statements.
2. Enforce one lock order app-wide.
3. Keep transactions short and add retry for 40P01.

## Prevention

Use SELECT ... FOR UPDATE SKIP LOCKED for queue patterns; it converts deadlock exposure into graceful skipping.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
