---
id: k8s-oomkilled
ecosystem: kubernetes
title: "Last State: Terminated, Reason: OOMKilled exit code 137"
tags: [k8s, memory]
verified: true
last-reviewed: 2026-10-01
---

# Last State: Terminated, Reason: OOMKilled exit code 137

## Symptom

Container is killed by the kernel cgroup OOM killer inside its pod.

## Cause

The JVM/Go/Node process exceeds the memory limit set on the container; runtime heap headroom (GC, buffers, off-heap) was not accounted for.

## Fix

1. Raise the limit to real peak + headroom (kubectl top, Prometheus).
2. Tell the runtime about the cgroup (NODE_OPTIONS=--max-old-space-size, -XX:MaxRAMPercentage).
3. Set requests == sensible so QoS is predictable.

## Prevention

Load-test to set limits; alert on container_memory_working_set_bytes near limit.

<!-- source: practitioner-verified, see CONTRIBUTING.md for entry policy -->
