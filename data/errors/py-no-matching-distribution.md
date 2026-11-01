---
id: py-no-matching-distribution
ecosystem: python
title: "ERROR: No matching distribution found for package==1.2.3"
tags: [python, pip]
verified: true
last-reviewed: 2026-10-01
---

# ERROR: No matching distribution found for package==1.2.3

## Symptom

pip cannot find the version you pinned.

## Cause

Typo in name, version never published, your Python/platform has no compatible wheel and no source dist, or you hit a private index that lacks it.

## Fix

1. pip index versions <pkg> (or browse PyPI) to confirm the version exists.
2. Check requires-python and platform tags.
3. Correct the pin or add --extra-index-url.

## Prevention

Generate requirements pins from an environment matching deployment (same Python minor, same OS).

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
