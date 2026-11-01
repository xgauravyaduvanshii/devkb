---
id: py-pytest-import
ecosystem: python
title: "ImportError while loading conftest / ModuleNotFoundError when running pytest (works in python directly)"
tags: [python, tests]
verified: true
last-reviewed: 2026-10-01
---

# ImportError while loading conftest / ModuleNotFoundError when running pytest (works in python directly)

## Symptom

pytest cannot import your package although the app runs.

## Cause

pytest adds rootdir paths differently; the package needs editable install (pip install -e .) or src layout so imports resolve for the test process.

## Fix

1. Install editable in the venv: pip install -e '.[dev]'.
2. Prefer src/ layout to force real installs.
3. Check pythonpath setting in pyproject if used.

## Prevention

CI should run pytest exactly like dev (same venv bootstrap script), never a bare pip install of only test deps.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
