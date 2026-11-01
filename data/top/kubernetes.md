# Top 10 Kubernetes pod failure states and what they mean

1. **Back-off restarting failed container ... CrashLoopBackOff** — see [`k8s-crashloopbackoff`](../errors/k8s-crashloopbackoff.md)
2. **ErrImagePull / ImagePullBackOff for image registry/x:tag** — see [`k8s-imagepullbackoff`](../errors/k8s-imagepullbackoff.md)
3. **Last State: Terminated, Reason: OOMKilled exit code 137** — see [`k8s-oomkilled`](../errors/k8s-oomkilled.md)
4. **0/3 nodes are available: 3 Insufficient cpu. pre-fit failure** — see [`k8s-pending-resources`](../errors/k8s-pending-resources.md)
5. **Error from server (Forbidden): pods is forbidden: User cannot list resource in namespace** — see [`k8s-rbac-forbidden`](../errors/k8s-rbac-forbidden.md)
6. **The connection to the server localhost:8080 was refused** — see [`k8s-kubeconfig-refused`](../errors/k8s-kubeconfig-refused.md)
7. **Pod was evicted: The node had condition: [DiskPressure]** — see [`k8s-evicted`](../errors/k8s-evicted.md)
8. **Readiness probe failed: HTTP request to /healthz on port 8080 failed: connection refused** — see [`k8s-readiness-fail`](../errors/k8s-readiness-fail.md)
9. **persistentvolumeclaim staying Pending: no available persistent volumes to bind / storageclass not found** — see [`k8s-pvc-pending`](../errors/k8s-pvc-pending.md)
10. **Init:Error / Init:CrashLoopBackOff on pod startup** — see [`k8s-init-crash`](../errors/k8s-init-crash.md)
