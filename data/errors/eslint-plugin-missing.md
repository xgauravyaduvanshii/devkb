---
id: eslint-plugin-missing
ecosystem: nodejs
title: "ESLint: Failed to load plugin 'react' declared in '.eslintrc': Cannot find module"
tags: [eslint, tooling]
verified: true
last-reviewed: 2026-10-01
---

# ESLint: Failed to load plugin 'react' declared in '.eslintrc': Cannot find module

## Symptom

ESLint crashes on startup naming a plugin it cannot resolve.

## Cause

The plugin is declared in config but not installed in the project that owns the config, or the editor runs a different ESLint version than the project.

## Fix

1. npm i -D eslint-plugin-react.
2. Match ESLint major versions (flat config vs eslintrc).
3. Point your editor at the workspace ESLint binary.

## Prevention

Keep editor and CI using the same resolved binary by running everything via npx / package scripts.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
