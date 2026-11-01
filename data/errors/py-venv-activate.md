---
id: py-venv-activate
ecosystem: python
title: "source venv/bin/activate: No such file or directory (or Scripts\\activate on Windows error)"
tags: [python, venv, windows]
verified: true
last-reviewed: 2026-10-01
---

# source venv/bin/activate: No such file or directory (or Scripts\activate on Windows error)

## Symptom

Activation fails right after python -m venv .venv.

## Cause

Windows uses venv\Scripts\activate (backslash, different shell variants); or venv creation aborted leaving a skeleton; or PowerShell blocks scripts.

## Fix

1. Match your shell: activate.ps1 (pwsh), activate.bat (cmd), activate (bash).
2. If the folder is empty, re-run python -m venv --without-pip? No: delete and recreate the venv.
3. Unblock scripts: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned.

## Prevention

Pin the activation command per OS in Makefiles or just scripts checked into the repo.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
