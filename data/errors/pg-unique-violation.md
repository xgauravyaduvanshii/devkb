---
id: pg-unique-violation
ecosystem: postgresql
title: "ERROR: duplicate key value violates unique constraint \"users_email_key\""
tags: [postgres, constraints]
verified: true
last-reviewed: 2026-10-01
---

# ERROR: duplicate key value violates unique constraint "users_email_key"

## Symptom

An INSERT/UPSERT fails naming a unique index.

## Cause

The value already exists: genuine duplicate, case-insensitive collision, or a race where two writers pass a check-then-insert.

## Fix

1. ON CONFLICT DO UPDATE (upsert) instead of check-then-insert.
2. Normalize input (lower(email)) before writing.
3. Audit the offending row by key from the error.

## Prevention

Make uniqueness rules explicit in the schema (citext or functional unique index) instead of app-side checks.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
