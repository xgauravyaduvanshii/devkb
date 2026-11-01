---
id: docker-exec-format
ecosystem: docker
title: "exec format error / image with platform linux/amd64 does not match this kernel"
tags: [docker, arch]
verified: true
last-reviewed: 2026-10-01
---

# exec format error / image with platform linux/amd64 does not match this kernel

## Symptom

Container exits instantly with exec format error, commonly running amd64 images on Apple Silicon/ARM.

## Cause

The image binary architecture does not match the node; qemu emulation is missing or the image has no arm64 variant.

## Fix

1. docker pull --platform=linux/arm64 <image> if available.
2. Otherwise enable binfmt: docker run --privileged --rm tonistiigi/binfmt --install all.
3. Best: build multi-arch images with buildx.

## Prevention

Use multi-arch builds (buildx bake) for anything deployed on mixed fleets.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
