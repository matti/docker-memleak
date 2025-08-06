# docker-memleak

Leaks memory until something happens.

`kubectl apply -f https://raw.githubusercontent.com/matti/docker-memleak/refs/heads/main/pod.yaml`

or

`docker run ghcr.io/matti/docker-memleak:latest`

```console
RSS: 48.97 MB
RSS: 61.47 MB
RSS: 71.47 MB
RSS: 81.85 MB
RSS: 91.85 MB
RSS: 101.85 MB
RSS: 112.10 MB
RSS: 122.10 MB
RSS: 132.22 MB
...
```
