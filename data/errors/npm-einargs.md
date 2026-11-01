---
id: npm-einargs
ecosystem: nodejs
title: "npm ERR! Invalid package name \"my-app\": name can only contain URL-friendly characters"
tags: [npm, naming]
verified: true
last-reviewed: 2026-10-01
---

# npm ERR! Invalid package name "my-app": name can only contain URL-friendly characters

## Symptom

npm init or publish fails with EINVALIDPACKAGENAME or EINTEGRITY-style name complaints.

## Cause

Package names must be lowercase, URL-safe, and may not contain spaces, dots at start, or leading underscores in the registry.

## Fix

1. Rename to kebab-case: my-app.
2. Update package.json name and any lockfile references.
3. Scope private names: @org/name.

## Prevention

Enforce naming with a lint rule or template; validate in CI with 'npm view' dry runs.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
