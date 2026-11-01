---
id: node-abort-ctrl
ecosystem: nodejs
title: "TypeError: fetch failed / ECONNRESET with undici but fine in browser"
tags: [node, http]
verified: true
last-reviewed: 2026-10-01
---

# TypeError: fetch failed / ECONNRESET with undici but fine in browser

## Symptom

Node 18+ global fetch errors on connections that browsers and axios handle.

## Cause

undici enforces headersTimeout/bodyTimeout and TLS defaults (SNI, ALPN) that differ from browsers; servers with slow headers trip it, and error causes hide in err.cause.

## Fix

1. Print err.cause to get the real socket error.
2. Tune undici dispatcher timeouts.
3. For self-signed CAs set NODE_EXTRA_CA_CERTS.

## Prevention

Wrap fetch to log cause chains; keep timeouts configured per service in one http client module.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
