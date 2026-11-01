---
id: git-detached-head
ecosystem: git
title: "You are in 'detached HEAD' state. You can look around, make experimental changes"
tags: [git, branches]
verified: true
last-reviewed: 2026-10-01
---

# You are in 'detached HEAD' state. You can look around, make experimental changes

## Symptom

Commits made in detached HEAD seem to vanish after checking out a branch.

## Cause

HEAD points at a commit (common after git checkout <sha> or during rebase) so new commits belong to no branch and can be pruned by gc.

## Fix

1. git switch -c rescue-branch to keep current commits.
2. To go back: git switch main.
3. Recover forgotten work with git reflog and branch from the found sha.

## Prevention

Prefer git switch <branch>; when exploring history, use git log rather than checking out SHAs in working clones.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
