---
id: py-module-not-found
ecosystem: python
title: "ModuleNotFoundError: No module named 'requests'"
tags: [python, imports]
verified: true
last-reviewed: 2026-10-01
---

# ModuleNotFoundError: No module named 'requests'

## Symptom

Script crashes naming an installed-or-not package.

## Cause

The interpreter running the script is not the one where the package lives (system python vs venv vs pyenv shim), or the name differs from the pip name.

## Fix

1. Print sys.executable to identify the interpreter.
2. pip show the package in that env.
3. Activate the venv (source venv/bin/activate) or run python -m pip install into the right interpreter.

## Prevention

Always install with python -m pip install against the exact interpreter that runs the app.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
