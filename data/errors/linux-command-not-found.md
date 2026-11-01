---
id: linux-command-not-found
ecosystem: linux
title: "bash: foo: command not found"
tags: [linux, shell]
verified: true
last-reviewed: 2026-10-01
---

# bash: foo: command not found

## Symptom

A tool that 'is installed' cannot be executed.

## Cause

Binary not on PATH (installed via pip/npm/pipx to a user bin dir), or you installed it in a venv whose activation was lost, or typo/sudo context differences.

## Fix

1. which -a / command -v to check resolution.
2. Find it: ls ~/.local/bin / snap bin.
3. Add the dir to PATH in the right shell rc.

## Prevention

Keep PATH additions in a sourced profile.d snippet; alias a doctor script that validates tool locations.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
