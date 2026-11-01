---
id: go-cannot-find-module
ecosystem: go
title: "go: cannot find main module, but found .git/config in /app"
tags: [go, modules]
verified: true
last-reviewed: 2026-10-01
---

# go: cannot find main module, but found .git/config in /app

## Symptom

go run/build refuses outside a module context.

## Cause

You are above the go.mod directory, or the repo predates modules so GO111MODULE wants a module root.

## Fix

1. cd where go.mod lives.
2. If none exists, go mod init <path>.
3. Modern Go always wants modules — add go.mod to the repo root.

## Prevention

Commit go.mod and require CI to run go build ./... from the module root.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
