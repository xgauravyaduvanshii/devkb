---
id: node-heap-oom
ecosystem: nodejs
title: "FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory"
tags: [node, memory]
verified: true
last-reviewed: 2026-10-01
---

# FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory

## Symptom

Node crashes after printing V8 heap limit messages and a stack trace.

## Cause

The default old-space heap (~2GB on 64-bit, less on older Node) is exhausted: giant JSON.parse, unbounded caches, or streaming files into memory.

## Fix

1. Find the leak with --inspect and heap snapshots before raising limits.
2. Stream large files (createReadStream) instead of readFileSync.
3. If legitimately memory-hungry, run node --max-old-space-size=4096.

## Prevention

Cap in-memory caches (LRU), set CI memory limits, and add heap growth alarms to long-running services.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
