---
id: mongo-duplicate-key
ecosystem: mongodb
title: "E11000 duplicate key error collection: users index: email_1"
tags: [mongodb, indexes]
verified: true
last-reviewed: 2026-10-01
---

# E11000 duplicate key error collection: users index: email_1

## Symptom

Insert fails on a unique index, sometimes with a null collision.

## Cause

A unique index rejects duplicates — including multiple missing fields when documents have null/missing values in the keyed path; or sparse/partial index does not match insert shape.

## Fix

1. find the conflicting doc: db.users.find({email: <value>}).
2. If nulls collide, use a partial/sparse filter expression.
3. Fix the writer to always set the field.

## Prevention

Design unique fields as required-with-value; validate documents app-side before insert, not just via index errors.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
