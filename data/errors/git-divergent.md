---
id: git-divergent
ecosystem: git
title: "hint: You have divergent branches and need to specify how to reconcile them"
tags: [git, pull]
verified: true
last-reviewed: 2026-10-01
---

# hint: You have divergent branches and need to specify how to reconcile them

## Symptom

git pull refuses to run, printing the divergent branches hint introduced in Git 2.27+.

## Cause

Local and remote branch each added commits; Git will not guess between merge and rebase.

## Fix

1. Decide once: git config --global pull.rebase true (recommended) or false for merge.
2. git pull again and resolve conflicts.

## Prevention

Set pull.rebase in a bootstrapping script or dotfiles so every machine behaves identically.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
