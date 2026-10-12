FROM alpine:3.20

CMD ["echo", "Hello from CMD in Dockerfile.cmd" ]

# gkinthaert@GeertBiz:~/docker-k8s/cmd-entrypoint$ docker run --rm cmd-example
## Hello from CMD in Dockerfile.cmd
# gkinthaert@GeertBiz:~/docker-k8s/cmd-entrypoint$ docker run --rm cmd-example echo "and what else can we do"
## and what else can we do