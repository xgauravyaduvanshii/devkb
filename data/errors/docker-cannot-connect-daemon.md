---
id: docker-cannot-connect-daemon
ecosystem: docker
title: "Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"
tags: [docker, daemon]
verified: true
last-reviewed: 2026-10-01
---

# Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

## Symptom

docker CLI exits immediately with a socket connect error.

## Cause

The daemon is not running (Desktop closed, service stopped) or your user cannot access the socket.

## Fix

1. Start Docker Desktop or systemctl start docker.
2. Check systemctl status docker.
3. For socket permission, add yourself to the docker group and re-login.

## Prevention

Use a systemd timer or login hook to confirm the daemon is up in scripts: docker info >/dev/null.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
