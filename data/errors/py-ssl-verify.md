---
id: py-ssl-verify
ecosystem: python
title: "SSLError: SSL: CERTIFICATE_VERIFY_FAILED: unable to get local issuer certificate"
tags: [python, ssl, macos]
verified: true
last-reviewed: 2026-10-01
---

# SSLError: SSL: CERTIFICATE_VERIFY_FAILED: unable to get local issuer certificate

## Symptom

pip/requests fails TLS on a machine where browsers work fine.

## Cause

Python (especially macOS installer builds) is not using the system trust store; corporate TLS-inspecting proxies add a root certificate Python never loaded.

## Fix

1. macOS: run Install Certificates.command in the Python app folder.
2. Set SSL_CERT_FILE to certifi's bundle or the corporate CA pem.
3. Never disable verification in production.

## Prevention

Bake the corporate CA bundle into images and export REQUESTS_CA_BUNDLE/SSL_CERT_FILE in env config.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
