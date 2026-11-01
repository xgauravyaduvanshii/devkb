---
id: linux-permission-denied
ecosystem: linux
title: "bash: ./script.sh: Permission denied even after chmod +x"
tags: [linux, exec]
verified: true
last-reviewed: 2026-10-01
---

# bash: ./script.sh: Permission denied even after chmod +x

## Symptom

An executable script is refused.

## Cause

No execute bit, a CRLF shebang line, the file on a noexec mount, or shebang pointing at a missing interpreter.

## Fix

1. chmod +x.
2. sed -i 's/\r$//' script.sh to strip CRLF.
3. Check mount flags: findmnt -T . | grep noexec.

## Prevention

Store scripts with LF endings (.gitattributes text=auto eol=lf) and CI-run shellcheck on them.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
