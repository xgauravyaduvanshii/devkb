---
id: pg-role-does-not-exist
ecosystem: postgresql
title: "FATAL: role \"<user>\" does not exist"
tags: [postgres, auth]
verified: true
last-reviewed: 2026-10-01
---

# FATAL: role "<user>" does not exist

## Symptom

Client connections fail immediately naming a missing role.

## Cause

The DSN username differs from the created role, the DB was rebuilt without roles, or peer authentication maps your OS user to a nonexistent role.

## Fix

1. psql as a superuser and \du to list roles.
2. CREATE ROLE / ALTER ROLE to match the app DSN.
3. For peer auth, add a pg_hba map or connect with an explicit -U.

## Prevention

Define roles in migration SQL so rebuilt databases always contain them.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
