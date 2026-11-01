---
id: node-gyp-failed
ecosystem: nodejs
title: "node-gyp rebuild fails: 'Could not find any Python installation' / gyp ERR!"
tags: [npm, native, build]
verified: true
last-reviewed: 2026-10-01
---

# node-gyp rebuild fails: 'Could not find any Python installation' / gyp ERR!

## Symptom

Installing a package with native addons (bcrypt, sharp older versions) dies inside node-gyp.

## Cause

node-gyp needs a matching toolchain: Python 3, a C++ compiler, and Node headers. Missing build tools or Python 2-only systems break it.

## Fix

1. Install build essentials (Ubuntu: apt install build-essential python3; macOS: xcode-select --install; Windows: windows-build-tools or Visual Studio C++ workload).
2. npm config set msvs_version where needed.
3. Prefer prebuilt binaries: use packages shipping prebuilds.

## Prevention

Pin dependency versions that ship prebuilds for your platform and CI image, so no compile happens.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
