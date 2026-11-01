---
id: pg-db-not-exist
ecosystem: postgresql
title: "FATAL: database \"app_production\" does not exist"
tags: [postgres, setup]
verified: true
last-reviewed: 2026-10-01
---

# FATAL: database "app_production" does not exist

## Symptom

Connection succeeds to the server but names a missing database.

## Cause

The deploy target/env was never created, the DSN db name changed, or a template-based provision failed.

## Fix

1. \l to list databases.
2. createdb app_production (with correct owner/encoding).
3. Fix the DSN env variable.

## Prevention

Provision databases in IaC (terraform/helm hooks) so environments cannot boot without their DB.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
