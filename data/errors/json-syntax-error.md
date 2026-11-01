---
id: json-syntax-error
ecosystem: web,json
title: "Unexpected token o in JSON at position 1 (or JSON.parse: unexpected end of data)"
tags: [json, js]
verified: true
last-reviewed: 2026-10-01
---

# Unexpected token o in JSON at position 1 (or JSON.parse: unexpected end of data)

## Symptom

JSON.parse crashes on a response you expected to be JSON.

## Cause

You are parsing a non-string (an already-parsed object stringifies to '[object Object]'), or the server returned HTML (login page/error) with a 200 OK.

## Fix

1. console.log the raw body first — the position message tells the story.
2. Guard: only parse when typeof body === 'string'.
3. Fix the API to return JSON with correct Content-Type; check proxies that rewrite bodies.

## Prevention

Have fetch wrappers inspect content-type and status before parsing; surface the first 100 chars in parse errors.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
