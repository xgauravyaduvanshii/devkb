---
id: npm-eacces
ecosystem: nodejs
title: "EACCES: permission denied, mkdir '/usr/local/lib/node_modules'"
tags: [npm, permissions, linux]
verified: true
last-reviewed: 2026-10-01
---

# EACCES: permission denied, mkdir '/usr/local/lib/node_modules'

## Symptom

npm install -g <pkg> fails with EACCES on /usr/local/lib.

## Cause

Global installs write to a prefix owned by root; running npm as a normal user cannot create dirs there.

## Fix

1. Set a user-owned prefix: npm config set prefix ~/.npm-global.
2. Add ~/.npm-global/bin to PATH.
3. Reinstall the package without sudo.

## Prevention

Never use sudo npm install -g. Use a version manager (nvm/fnm/volta) or a user prefix so the whole tree is yours.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
