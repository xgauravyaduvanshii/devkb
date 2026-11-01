# Top Docker build & runtime failures, ranked by lost hours

1. **Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?** — see [`docker-cannot-connect-daemon`](../errors/docker-cannot-connect-daemon.md)
2. **permission denied while trying to connect to the Docker daemon socket** — see [`docker-permission-socket`](../errors/docker-permission-socket.md)
3. **no space left on device (while building or pulling)** — see [`docker-no-space-left`](../errors/docker-no-space-left.md)
4. **Error response from daemon: manifest for image:tag not found** — see [`docker-manifest-unknown`](../errors/docker-manifest-unknown.md)
5. **exec format error / image with platform linux/amd64 does not match this kernel** — see [`docker-exec-format`](../errors/docker-exec-format.md)
6. **no such service: web (in compose project)** — see [`docker-compose-service-missing`](../errors/docker-compose-service-missing.md)
7. **Name or service not known (DNS failure inside container)** — see [`docker-dns-fail`](../errors/docker-dns-fail.md)
8. **E: Problem executing scripts APT::Post-Invoke 'apt clean' / failed to exec batch processor /bin/sh** — see [`docker-apt-post-invoke`](../errors/docker-apt-post-invoke.md)
9. **COPY failed: file outside of build context / build hangs uploading context** — see [`docker-build-context-huge`](../errors/docker-build-context-huge.md)
10. **Container starts then immediately exits (docker ps shows nothing)** — see [`docker-container-exits`](../errors/docker-container-exits.md)
