---
id: node-eaddrinuse
ecosystem: nodejs
title: "EADDRINUSE: address already in use :::3000"
tags: [node, ports, dev]
verified: true
last-reviewed: 2026-10-01
---

# EADDRINUSE: address already in use :::3000

## Symptom

Server startup fails because the port is taken.

## Cause

Another process (often a previous dev server that did not exit) holds the port, or it is stuck in TIME_WAIT with SO_REUSEADDR off.

## Fix

1. Find the holder: lsof -i :3000 (or ss -ltnp).
2. Kill it: kill -9 <pid>.
3. Or start your app on another port via PORT=3001.

## Prevention

Always handle SIGINT/SIGTERM in dev servers and close them properly instead of killing terminals.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
