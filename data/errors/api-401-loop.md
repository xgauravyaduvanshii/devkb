---
id: api-401-loop
ecosystem: web,auth
title: "401 Unauthorized immediately after successful login, then a redirect loop to /login"
tags: [auth, jwt]
verified: true
last-reviewed: 2026-10-01
---

# 401 Unauthorized immediately after successful login, then a redirect loop to /login

## Symptom

The API rejects a token the app just obtained.

## Cause

The client sends the wrong header format (missing Bearer prefix), the token audience/issuer does not match, the clock skew makes it expired-at-arrival, or cookies are SameSite-blocked so session auth never arrives.

## Fix

1. Inspect the outgoing Authorization header.
2. Decode the JWT (devkit jwt-decode!) and verify exp/aud against server config.
3. Sync clocks (NTP) and allow leeway; check SameSite/Secure cookie flags.

## Prevention

Integrate an auth smoke test per deploy: login -> call one protected endpoint -> assert 200.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
