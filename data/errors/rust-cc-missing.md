---
id: rust-cc-missing
ecosystem: rust
title: "error: linker `cc` not found / executable file not found: cc"
tags: [rust, build]
verified: true
last-reviewed: 2026-10-01
---

# error: linker `cc` not found / executable file not found: cc

## Symptom

Cargo fails at link step on a minimal container or fresh Linux.

## Cause

No C toolchain is installed for the linker (rustc shells out to cc), common on slim distro images.

## Fix

1. apt install build-essential (Debian) or equivalent.
2. Or choose musl/prebuilt binaries.
3. Confirm cargo build -v to see the linker invocation.

## Prevention

Base images for Rust builds should include clang or gcc explicitly in the Dockerfile.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
