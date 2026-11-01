---
id: npm-enoent
ecosystem: nodejs
title: "ENOENT: no such file or directory, open 'package.json'"
tags: [npm, files]
verified: true
last-reviewed: 2026-10-01
---

# ENOENT: no such file or directory, open 'package.json'

## Symptom

npm run / npm install aborts with ENOENT on package.json.

## Cause

npm resolves package.json from the current working directory; the file is missing or you are one level too deep/shallow in the repo.

## Fix

1. pwd and ls to confirm you are in the package root.
2. cd to the directory containing package.json.
3. If the file is truly gone, restore it from git: git checkout -- package.json.

## Prevention

Commit package.json (never gitignore it) and keep one package per repo root or per workspace folder.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
