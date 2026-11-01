---
id: rust-cargo-missing
ecosystem: rust
title: "error: command not found: cargo / rustc not found after rustup install"
tags: [rust, toolchain]
verified: true
last-reviewed: 2026-10-01
---

# error: command not found: cargo / rustc not found after rustup install

## Symptom

rustup installed but cargo/rustc are not on PATH.

## Cause

The shell PATH lacks ~/.cargo/bin because the env script was not sourced (new terminal, non-login shell, or installed via distro then removed).

## Fix

1. export PATH=$HOME/.cargo/bin:$PATH (rustup adds it to env scripts; re-run rustup or source ~/.cargo/env).
2. Verify rustup show works.
3. Restart the IDE/shell.

## Prevention

Install via rustup only, and check ~/.cargo/bin presence in a bootstrap script used for new machines.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
