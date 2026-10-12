FROM alpine:3.20

ENTRYPOINT [ "echo" ] 
CMD [ "DEFAULT MESSAGE" ]

# this is more flexible than the ENTRYPOINT example, 
# because you can override the CMD with a different command, 
# but you cannot override the ENTRYPOINT without using the --entrypoint option

# gkinthaert@GeertBiz:~/docker-k8s/cmd-entrypoint$ docker build -t example .
# gkinthaert@GeertBiz:~/docker-k8s/cmd-entrypoint$ docker run --rm example
## DEFAULT MESSAGE
# gkinthaert@GeertBiz:~/docker-k8s/cmd-entrypoint$ docker run --rm example "new message"
## new message
