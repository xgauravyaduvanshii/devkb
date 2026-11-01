---
id: docker-build-context-huge
ecosystem: docker
title: "COPY failed: file outside of build context / build hangs uploading context"
tags: [docker, build]
verified: true
last-reviewed: 2026-10-01
---

# COPY failed: file outside of build context / build hangs uploading context

## Symptom

A docker build stalls uploading a giant context or refuses paths you can see.

## Cause

COPY cannot reach outside the context dir, and the context drags node_modules/.git into the upload every time.

## Fix

1. Add a .dockerignore (node_modules, .git, dist).
2. Restructure: run builds with the right context (-f and .) or use named contexts.
3. Keep secrets out of context entirely.

## Prevention

Commit .dockerignore in every service repo; CI lints context size by checking build logs upload lines.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
