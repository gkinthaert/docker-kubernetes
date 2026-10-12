# set the runtime environment
FROM node:22

# setting working directory
WORKDIR /app

# copy local files into the container
COPY package*.json .

RUN npm ci

# copy the source code of the app
COPY src/index.js index.js

# expose the applicaton port
EXPOSE 3000

# start the application
CMD [ "node", "index.js"]

