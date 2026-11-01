---
id: docker-permission-socket
ecosystem: docker
title: "permission denied while trying to connect to the Docker daemon socket"
tags: [docker, linux]
verified: true
last-reviewed: 2026-10-01
---

# permission denied while trying to connect to the Docker daemon socket

## Symptom

Docker commands fail unless prefixed with sudo on Linux.

## Cause

The docker.sock is owned by root and your user is not in the docker group.

## Fix

1. sudo usermod -aG docker $USER.
2. newgrp docker or log out/in.
3. Verify docker info runs without sudo.

## Prevention

On CI use rootless docker or a dedicated service user; treat docker group membership as sudo-equivalent.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
