---
id: linux-crlf-interpreter
ecosystem: linux
title: "/bin/bash^M: bad interpreter: No such file or directory"
tags: [linux, encoding]
verified: true
last-reviewed: 2026-10-01
---

# /bin/bash^M: bad interpreter: No such file or directory

## Symptom

A shell script or systemd unit fails only on Linux after coming from Windows/git.

## Cause

CRLF line endings put \r into the shebang, so the kernel seeks an interpreter named bash\r.

## Fix

1. Convert: sed -i 's/\r$//' file (or dos2unix).
2. Add .gitattributes: *.sh text eol=lf.
3. Re-commit.

## Prevention

CI should lint for CRLF in shell/systemd files; core.autocrlf=input on Linux clones.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
