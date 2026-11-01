---
id: web-redirect-loop
ecosystem: web
title: "ERR_TOO_MANY_REDIRECTS (HTTP 301/302 cycle)"
tags: [http, https]
verified: true
last-reviewed: 2026-10-01
---

# ERR_TOO_MANY_REDIRECTS (HTTP 301/302 cycle)

## Symptom

The browser loops between two URLs and gives up.

## Cause

Mixed-force rules: the app redirects to HTTPS while the proxy terminates TLS and the app still sees http (missing forwarded headers), so each layer bounces the other.

## Fix

1. Enable trust-proxy / X-Forwarded-Proto handling in the app framework.
2. Fix redirect rules at one layer only (edge or app, not both).
3. Clear cookies that carry state forcing redirects.

## Prevention

Standardize TLS termination strategy per environment and test with curl -sIL to read the redirect chain.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
