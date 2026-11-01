---
id: pg-relation-missing
ecosystem: postgresql
title: "ERROR: relation \"users\" does not exist"
tags: [postgres, schema]
verified: true
last-reviewed: 2026-10-01
---

# ERROR: relation "users" does not exist

## Symptom

Queries fail although the table 'exists' in your client.

## Cause

Wrong database/schema in the session (search_path), migrations not applied on this host, or the table is quoted-case ("Users") and must be referenced exactly.

## Fix

1. \dt in psql to confirm where the table lives.
2. SET search_path or qualify: app.users.
3. Run pending migrations.

## Prevention

Never use unquoted mixed-case identifiers; pin a per-app search_path (or schema-qualify) in connection setup.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
