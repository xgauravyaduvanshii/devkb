---
id: py-black-ruff-conflict
ecosystem: python
title: "Formatter and linter disagree: files keep flipping between ruff format and black settings"
tags: [python, lint]
verified: true
last-reviewed: 2026-10-01
---

# Formatter and linter disagree: files keep flipping between ruff format and black settings

## Symptom

Every PR rewrites import ordering or quotes; two tools fight.

## Cause

Ruff and Black (or isort) have overlapping rules with different defaults configured in separate files.

## Fix

1. Pick one formatter (ruff format or black) and disable overlap in the linter config.
2. Consolidate rule settings in pyproject.toml only.
3. Add CI check format --check.

## Prevention

A single [tool.ruff] + [tool.black] block in pyproject, reviewed once, prevents silent drift.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
