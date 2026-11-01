---
id: py-pip-killed
ecosystem: python
title: "Killed while installing packages / exit code 137 during pip install in Docker"
tags: [python, docker, memory]
verified: true
last-reviewed: 2026-10-01
---

# Killed while installing packages / exit code 137 during pip install in Docker

## Symptom

pip install is OOM-killed inside containers or small VMs.

## Cause

pip compiling large wheels (numpy, pandas) in low-memory containers (512MB) exhausts RAM; the kernel kills the process.

## Fix

1. Use wheels (--only-binary=:all:) or slim base images with prebuilt wheels.
2. Add swap or bump container memory.
3. Install with --no-cache-dir to cut disk pressure.

## Prevention

Build Python images with at least 2GB during deps install, or pre-install deps in a base layer you maintain.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
