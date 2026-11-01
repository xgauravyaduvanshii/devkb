---
id: git-checkout-conflict
ecosystem: git
title: "error: Your local changes to the following files would be overwritten by checkout"
tags: [git, workflow]
verified: true
last-reviewed: 2026-10-01
---

# error: Your local changes to the following files would be overwritten by checkout

## Symptom

Branch switch refuses because uncommitted edits collide with the target branch.

## Cause

The same file differs between branches and you modified it locally; Git protects the uncommitted work.

## Fix

1. Commit the work, or stash it: git stash push -m 'wip'.
2. Switch branch.
3. git stash pop afterwards (or continue on the new branch).

## Prevention

Commit small checkpoints (WIP branches pushed) instead of leaving large uncommitted trees.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
