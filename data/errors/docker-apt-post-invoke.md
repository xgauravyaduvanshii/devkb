---
id: docker-apt-post-invoke
ecosystem: docker
title: "E: Problem executing scripts APT::Post-Invoke 'apt clean' / failed to exec batch processor /bin/sh"
tags: [docker, debian]
verified: true
last-reviewed: 2026-10-01
---

# E: Problem executing scripts APT::Post-Invoke 'apt clean' / failed to exec batch processor /bin/sh

## Symptom

apt-get inside a slim image fails during the cleanup hook.

## Cause

A build-stage toolchain (or missing /bin/sh in distroless) breaks APT hook scripts, often after cross-staging files between builders and finals.

## Fix

1. Remove hooks in final layers: rm -f /etc/apt/apt.conf.d/01autoremove* or build with --no-install-recommends.
2. Copy only runtime artifacts between stages.

## Prevention

Prefer multi-stage builds where the final stage never runs apt at all.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
