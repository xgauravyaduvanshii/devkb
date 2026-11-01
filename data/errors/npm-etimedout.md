---
id: npm-etimedout
ecosystem: nodejs
title: "npm ERR! code ETIMEDOUT / ECONNREFUSED registry.npmjs.org"
tags: [npm, network]
verified: true
last-reviewed: 2026-10-01
---

# npm ERR! code ETIMEDOUT / ECONNREFUSED registry.npmjs.org

## Symptom

npm install times out against the registry, often behind corporate proxies or IPv6-only hosts.

## Cause

The HTTPS request to registry.npmjs.org never completes: proxy auth, MTU issues, or IPv6 misrouting.

## Fix

1. Test connectivity: curl -I https://registry.npmjs.org.
2. Configure proxy: npm config set proxy/https-proxy.
3. Force IPv4 with node --dns-result-order=ipv4first or a mirror registry.

## Prevention

Cache with a local proxy registry (Verdaccio/Nexus) and store proxy settings in .npmrc per project.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
