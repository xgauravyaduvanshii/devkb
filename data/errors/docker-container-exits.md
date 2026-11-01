---
id: docker-container-exits
ecosystem: docker
title: "Container starts then immediately exits (docker ps shows nothing)"
tags: [docker, process]
verified: true
last-reviewed: 2026-10-01
---

# Container starts then immediately exits (docker ps shows nothing)

## Symptom

docker run appears to succeed but the container is gone seconds later.

## Cause

Docker stops when PID 1 exits: the app daemonizes/forks to background, or CMD runs a one-shot shell, so the foreground process ends.

## Fix

1. docker logs <ctr> to see the exit output.
2. Run the app in foreground (nginx daemon off, node server.js not pm2 start).
3. Use -d and inspect exit code 0 vs crash.

## Prevention

One foreground process per container is the rule; encode it in entrypoint scripts that exec, not spawn.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
