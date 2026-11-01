---
id: web-csp-blocked
ecosystem: web
title: "Refused to execute script because it violates the following Content Security Policy directive"
tags: [http, security]
verified: true
last-reviewed: 2026-10-01
---

# Refused to execute script because it violates the following Content Security Policy directive

## Symptom

Inline scripts/styles or a CDN asset are blocked even though they load locally fine.

## Cause

The page ships a CSP header (often via a framework default or gateway) missing that asset's source in script-src/style-src, or nonce/hash requirements are unmet.

## Fix

1. Read the exact blocked URL and directive in the console.
2. Add the origin to the policy or emit nonces for inline scripts.
3. Remove 'unsafe-inline' as a permanent answer.

## Prevention

Keep CSP in version-controlled middleware and test report-only mode before enforcing in production.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
