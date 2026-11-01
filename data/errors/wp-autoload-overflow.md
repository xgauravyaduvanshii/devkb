---
id: wp-autoload-overflow
ecosystem: web,wordpress
title: "Fatal error: Uncaught Error: Call to undefined function mysqli_real_escape_string()"
tags: [php, mysql]
verified: true
last-reviewed: 2026-10-01
---

# Fatal error: Uncaught Error: Call to undefined function mysqli_real_escape_string()

## Symptom

A PHP app crashes naming a removed/undefined function.

## Cause

PHP 8 removed old mysqli aliases, or the app was written for mysql_* era APIs; also occurs when php-mysql extension is not loaded.

## Fix

1. Confirm extension: php -m | grep mysqli.
2. Install php-mysql package.
3. Replace legacy calls with prepared statements (mysqli or PDO).

## Prevention

Run php -l and static analysis (phan/psalm) targeting the production PHP version in CI.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
