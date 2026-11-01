---
id: go-nil-map
ecosystem: go
title: "panic: assignment to entry in nil map"
tags: [go, panic]
verified: true
last-reviewed: 2026-10-01
---

# panic: assignment to entry in nil map

## Symptom

Writing map[key]=value crashes at runtime.

## Cause

Maps are reference types that must be initialized; var m map[string]int is nil, unlike slices which append handles lazily.

## Fix

1. m := make(map[string]int) or a literal.
2. If the map came from a struct, ensure the constructor initializes the field.
3. Guard decode paths where JSON null leaves the field nil.

## Prevention

Initialize all map fields in New... constructors; add a unit test asserting no nil maps after construction.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
