---
id: py-unicode-decode
ecosystem: python
title: "UnicodeDecodeError: 'charmap' codec can't decode byte 0x9d"
tags: [python, encoding]
verified: true
last-reviewed: 2026-10-01
---

# UnicodeDecodeError: 'charmap' codec can't decode byte 0x9d

## Symptom

open() works on Linux/macOS but crashes on Windows reading a file.

## Cause

Python defaults to the locale encoding (cp1252 on Windows) when no encoding is given; the file is UTF-8.

## Fix

1. Open with encoding='utf-8' explicitly.
2. For messy bytes add errors='replace'.
3. Fix the writer to emit UTF-8.

## Prevention

Enforce explicit encoding='utf-8' everywhere (lint rule or code review bot) and configure IDEs to default UTF-8.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
