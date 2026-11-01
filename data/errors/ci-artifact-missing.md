---
id: ci-artifact-missing
ecosystem: devops,ci
title: "Run failed: Error: Artifact not found / Unable to download artifact(s)"
tags: [ci, actions]
verified: true
last-reviewed: 2026-10-01
---

# Run failed: Error: Artifact not found / Unable to download artifact(s)

## Symptom

A workflow step cannot fetch an artifact another job just 'uploaded'.

## Cause

Artifacts are keyed by run and workspace: the upload ran in a different job that did not finish (or was skipped), or the names differ by whitespace, or retention expired.

## Fix

1. Compare exact name strings in upload/download steps.
2. Ensure the producing job needs: [upload] dependency.
3. Check if actions/upload-artifact v4 changed path semantics (no default root).

## Prevention

Put artifact names in workflow env vars so producers/consumers cannot drift.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
