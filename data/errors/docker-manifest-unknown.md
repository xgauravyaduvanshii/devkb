---
id: docker-manifest-unknown
ecosystem: docker
title: "Error response from daemon: manifest for image:tag not found"
tags: [docker, registry]
verified: true
last-reviewed: 2026-10-01
---

# Error response from daemon: manifest for image:tag not found

## Symptom

Pull fails although the repo exists.

## Cause

The tag you referenced was never pushed, was deleted by retention cleanup, or you mistyped a digest; default :latest may not exist.

## Fix

1. Check available tags on the registry (docker image ls, registry API, or the web UI).
2. Correct the tag.
3. Push the missing tag if it is yours.

## Prevention

Pin immutable digests or versioned tags in deploy configs instead of latest.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
