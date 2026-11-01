---
id: vite-port-conflict
ecosystem: nodejs
title: "Vite: Port 5173 is in use, trying another one... / ws proxy error ECONNREFUSED"
tags: [vite, dev]
verified: true
last-reviewed: 2026-10-01
---

# Vite: Port 5173 is in use, trying another one... / ws proxy error ECONNREFUSED

## Symptom

Vite silently switches ports and the browser app fails to connect, or HMR websocket errors flood the console.

## Cause

A stale Vite process holds 5173; a reverse proxy or browser tab still points at the old port/ws endpoint.

## Fix

1. Kill stale node servers (ps aux | grep vite).
2. Set strictPort: true to fail fast instead of drifting.
3. Clear old service workers/tabs.

## Prevention

Use strictPort in team projects so everyone gets deterministic dev URLs.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
