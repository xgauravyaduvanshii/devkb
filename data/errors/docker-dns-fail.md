---
id: docker-dns-fail
ecosystem: docker
title: "Name or service not known (DNS failure inside container)"
tags: [docker, network]
verified: true
last-reviewed: 2026-10-01
---

# Name or service not known (DNS failure inside container)

## Symptom

Containers cannot resolve hostnames while the host can.

## Cause

Embedded DNS (127.0.0.11) is broken by network driver/firewall changes, or the container uses a network without DNS, or /etc/resolv.conf hit the 1023-1034 iptables NAT range conflict.

## Fix

1. Test: docker run --rm alpine nslookup example.com.
2. Recreate the bridge network; restart docker.
3. If host uses 1023-1034 ports, set fixed CIDR in daemon.json and recreate default bridge.

## Prevention

Avoid host services binding 1023-1034; pin network CIDRs in production hosts.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
