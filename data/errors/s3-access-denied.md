---
id: s3-access-denied
ecosystem: cloud
title: "An error occurred (AccessDenied) when calling the PutObject operation"
tags: [aws, s3]
verified: true
last-reviewed: 2026-10-01
---

# An error occurred (AccessDenied) when calling the PutObject operation

## Symptom

AWS CLI/SDK writes to S3 fail despite valid keys.

## Cause

The bucket policy/IAM lacks s3:PutObject for this principal or path, the bucket is owned by another account with a cross-account policy missing, or public-block settings reject unsigned ACLs.

## Fix

1. aws sts get-caller-identity to confirm the principal.
2. Read bucket policy + IAM for the exact arn path.
3. Remove deprecated ACL grants (no-acl flag) for bucket-owner-full-control writes.

## Prevention

Mirror least-privilege paths in IAM and bucket policy together; test with IAM simulator before deploy.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
