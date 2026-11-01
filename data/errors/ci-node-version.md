---
id: ci-node-version
ecosystem: devops,ci
title: "npm ERR! engine: Not compatible with your version (node 16 vs required >=18)"
tags: [ci, node]
verified: true
last-reviewed: 2026-10-01
---

# npm ERR! engine: Not compatible with your version (node 16 vs required >=18)

## Symptom

CI install fails an engine check that local dev never hits.

## Cause

The workflow pins an older node-version than dependencies require; or a lockfile regenerated on newer npm changed optional dependency tree resolution.

## Fix

1. Bump actions/setup-node with node-version matching engines (e.g., 'lts/*').
2. Use the packageManager field + corepack for npm/yarn/pnpm parity.
3. Commit lockfiles from the CI version.

## Prevention

One toolchain source of truth: .nvmrc + packageManager field, read by both CI and local bootstrap scripts.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
