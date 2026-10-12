FROM node:22-alpine

WORKDIR /app

# COPY . . # try to be specific about what to include in the container image so you do no
# include everything in the folder.  Even better is to use .dockerignore
# COPY index.js index.js # this is too specific if you have many
# files you want to copy while excluding others
COPY . .

CMD ["node", "index.js"]
