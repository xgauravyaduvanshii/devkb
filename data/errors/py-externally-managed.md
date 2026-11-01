---
id: py-externally-managed
ecosystem: python
title: "error: externally-managed-environment (PEP 668) on pip install"
tags: [python, pip, linux]
verified: true
last-reviewed: 2026-10-01
---

# error: externally-managed-environment (PEP 668) on pip install

## Symptom

pip refuses to install system-wide on Debian/Ubuntu 23+ and Homebrew macOS.

## Cause

The OS marks its Python as externally managed to protect distro packages from pip conflicts.

## Fix

1. Create a venv: python -m venv .venv && source .venv/bin/activate.
2. Or use pipx for CLI tools.
3. As a last resort, --break-system-packages (not recommended).

## Prevention

Document bootstrap: repo ships a Makefile/justfile target that creates the venv automatically.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
