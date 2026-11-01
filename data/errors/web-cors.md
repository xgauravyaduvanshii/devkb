---
id: web-cors
ecosystem: web,cors
title: "Access to fetch has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header"
tags: [http, browser]
verified: true
last-reviewed: 2026-10-01
---

# Access to fetch has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header

## Symptom

Browser blocks a cross-origin request; server logs may show no error at all.

## Cause

The server response lacks CORS headers for the origin/method/headers used — and note the failing request is often the OPTIONS preflight, which APIs frequently do not route.

## Fix

1. Set Access-Control-Allow-Origin (exact origin, not * if credentials).
2. Answer OPTIONS with Allow-Methods/Allow-Headers.
3. For local dev, use the dev-server proxy so calls are same-origin.

## Prevention

Centralize CORS middleware config per environment and document allowed origins; never tell users to disable browser security.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
