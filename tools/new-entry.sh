#!/usr/bin/env bash
# Scaffold a new entry: ./tools/new-entry.sh <id> <ecosystem> <title>
set -euo pipefail
ID="${1:?id required}"; ECO="${2:?ecosystem required}"; TITLE="${3:?title required}"
F="data/errors/${ID}.md"
test -e "$F" && { echo "$F exists"; exit 1; }
cat > "$F" <<EOF
---
id: ${ID}
ecosystem: ${ECO}
title: ${TITLE}
tags: []
verified: false
last-reviewed: $(date -u +%Y-%m-%d)
---

# ${TITLE}

## Symptom

TODO: exact error text and where it appears.

## Cause

TODO: root cause in one paragraph.

## Fix

1. TODO

## Prevention

TODO: how to stop this recurring.
EOF
echo "created $F"
