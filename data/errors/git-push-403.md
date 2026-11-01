---
id: git-push-403
ecosystem: git
title: "remote: Permission to X denied to Y. fatal: unable to access (403)"
tags: [git, auth]
verified: true
last-reviewed: 2026-10-01
---

# remote: Permission to X denied to Y. fatal: unable to access (403)

## Symptom

Push fails with permission denied or token auth errors after HTTPS password support ended.

## Cause

No write access to the repo, or the cached credential/token lacks repo scope, or the org requires signed commits.

## Fix

1. Check access on the repo page.
2. gh auth refresh -s repo or update the PAT scopes.
3. Fork + pull request if you are an outside contributor.

## Prevention

Use gh CLI auth (it keeps scopes explicit) and audit org teams rather than personal grants.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
