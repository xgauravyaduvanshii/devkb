---
id: go-unexpected-eof
ecosystem: go
title: "syntax error: unexpected EOF, expected }"
tags: [go, parser]
verified: true
last-reviewed: 2026-10-01
---

# syntax error: unexpected EOF, expected }

## Symptom

Compilation stops with EOF errors naming braces.

## Cause

A closing brace/paren was deleted or indentation fooled a formatter — in Go braces (not indentation) define blocks, often after sloppy merges.

## Fix

1. Trust gofmt: run gofmt -l . and fix listed files.
2. Jump to the reported line; check the block that opened near it.
3. Diff recent merges for lost braces.

## Prevention

Format on save with gopls and require gofmt-clean CI so brace drift fails fast and small.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
