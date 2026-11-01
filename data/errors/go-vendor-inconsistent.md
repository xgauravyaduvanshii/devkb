---
id: go-vendor-inconsistent
ecosystem: go
title: "go build: vendored module X is not marked as explicit / inconsistent vendoring"
tags: [go, vendor]
verified: true
last-reviewed: 2026-10-01
---

# go build: vendored module X is not marked as explicit / inconsistent vendoring

## Symptom

Building with vendor/ dir fails after adding or bumping dependencies.

## Cause

go.mod changed but vendor/ (created with go mod vendor) was not regenerated; Go refuses to guess which copy wins.

## Fix

1. Re-run go mod vendor.
2. Commit the vendor changes with the go.mod change.
3. Add a CI step: go mod vendor && git diff --exit-code vendor.

## Prevention

Treat vendor refresh as part of dependency PRs; CI enforcing it keeps drift impossible.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
