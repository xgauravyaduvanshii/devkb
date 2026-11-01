---
id: docker-compose-service-missing
ecosystem: docker
title: "no such service: web (in compose project)"
tags: [docker, compose]
verified: true
last-reviewed: 2026-10-01
---

# no such service: web (in compose project)

## Symptom

docker compose up <svc> complains the service does not exist.

## Cause

The service name in compose.yaml changed, the wrong file is loaded (-f), or profiles hide the service.

## Fix

1. docker compose config --services to list real names.
2. Fix the compose file or the command.
3. Export COMPOSE_PROFILES for profiled services.

## Prevention

Keep service names stable and validate compose files in CI with docker compose config -q.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
