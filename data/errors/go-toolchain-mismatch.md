---
id: go-toolchain-mismatch
ecosystem: go
title: "go.mod requires go >= 1.22 (running go 1.21; GOTOOLCHAIN=local)"
tags: [go, toolchain]
verified: true
last-reviewed: 2026-10-01
---

# go.mod requires go >= 1.22 (running go 1.21; GOTOOLCHAIN=local)

## Symptom

Build refuses because the local Go is older than the go directive.

## Cause

Someone committed a bumped toolchain requirement (or a dependency requires it) while your machine/CI pins an older Go.

## Fix

1. Upgrade the local toolchain (GOTOOLCHAIN=auto downloads the required version).
2. Or lower go.mod's go directive if the new-version features were accidental.
3. Sync CI images to match.

## Prevention

Manage Go versions with asdf/Toolenv plus GOTOOLCHAIN=auto pinned in CI, and treat go.mod bumps as breaking changes.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
