---
id: git-author-identity
ecosystem: git
title: "fatal: unable to auto-detect email address / wrong committer on push"
tags: [git, config]
verified: true
last-reviewed: 2026-10-01
---

# fatal: unable to auto-detect email address / wrong committer on push

## Symptom

Commit fails, or GitHub rejects the push because the commit email is not linked to the account.

## Cause

user.name/user.email are unset or were set per-repo to a noreply mismatch.

## Fix

1. git config --global user.name "Name" && git config --global user.email you@example.com.
2. Fix last commit: git commit --amend --reset-author.
3. Add the email to your GitHub account.

## Prevention

Configure a conditional includeIf per directory in .gitconfig to separate work/personal identities.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
