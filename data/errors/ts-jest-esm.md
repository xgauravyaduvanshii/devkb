---
id: ts-jest-esm
ecosystem: typescript
title: "Jest: Cannot use import statement outside a module (ESM/TS projects)"
tags: [typescript, jest, esm]
verified: true
last-reviewed: 2026-10-01
---

# Jest: Cannot use import statement outside a module (ESM/TS projects)

## Symptom

Jest chokes on ESM syntax while vitest/ts-node run the same files fine.

## Cause

Jest's default CJS transform does not match a type: module NodeNext project; babel config missing or swc/esm experimental flags needed.

## Fix

1. Configure extensionsToTreatAsEsm and run node with --experimental-vm-modules.
2. Or migrate the transform to ts-jest's ESM preset / @swc/jest.
3. Simplest: move to vitest for ESM-native projects.

## Prevention

Let the test runner match the app module system; validate with one tiny ESM test in CI before the suite grows.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
