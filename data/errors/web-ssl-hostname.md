---
id: web-ssl-hostname
ecosystem: web
title: "NET::ERR_CERT_COMMON_NAME_INVALID / SSL: hostname mismatch"
tags: [https, tls]
verified: true
last-reviewed: 2026-10-01
---

# NET::ERR_CERT_COMMON_NAME_INVALID / SSL: hostname mismatch

## Symptom

The certificate is trusted but rejected for this hostname.

## Cause

The cert's SAN list does not include the hostname you used (www vs apex), or an SNI-less default cert is served (old LBs, misconfigured vhosts), or you hit an IP directly.

## Fix

1. openssl s_client -connect host:443 -servername host | grep subject to compare CN/SANs.
2. Fix DNS to point where the cert is valid.
3. Ensure the edge sends SNI and serves the right vhost.

## Prevention

Automate cert issuance (ACME) per hostname and include SAN coverage checks in deploy pipelines.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
