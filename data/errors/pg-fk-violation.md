---
id: pg-fk-violation
ecosystem: postgresql
title: "ERROR: insert or update on table \"orders\" violates foreign key constraint"
tags: [postgres, constraints]
verified: true
last-reviewed: 2026-10-01
---

# ERROR: insert or update on table "orders" violates foreign key constraint

## Symptom

A write fails because the referenced parent row is missing.

## Cause

Data drift: parent deleted earlier, inserts ordered wrong in a batch, or a migration backfilled keys that do not exist.

## Fix

1. Identify the missing key from the error detail.
2. Insert the parent first or fix the bad reference.
3. Wrap batch writes in one transaction in dependency order.

## Prevention

Generate fixture data following FK graphs, and enforce deferrable constraints where batch order is hard.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
