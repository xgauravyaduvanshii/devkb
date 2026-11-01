---
id: wp-php-memory-limit
ecosystem: php
title: "Fatal error: Allowed memory size of 134217728 bytes exhausted"
tags: [php, memory]
verified: true
last-reviewed: 2026-10-01
---

# Fatal error: Allowed memory size of 134217728 bytes exhausted

## Symptom

PHP process dies mid-request naming its memory ceiling.

## Cause

A script (export, image processing, plugin loop) exceeds memory_limit; 128M is a frequent default too small for heavy work.

## Fix

1. Identify the leak with a peak-memory log just before fatal.
2. Stream/chunk the work instead of loading full sets.
3. Raise the limit for the CLI context only if legitimate.

## Prevention

Set per-context limits (FPM vs CLI) and alert on request memory trends so growth is visible before fatals.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
