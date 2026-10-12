# 1. build the production bundle

FROM node:22-alpine AS build    
WORKDIR /app
COPY package*.json .
RUN npm ci

# COPY src src
# COPY public public
# but we can do this with one command...
COPY . .
RUN npm run build

# 2. serve the production bundle with an http server

FROM nginx:1.27.0

COPY --from=build /app/build /usr/share/nginx/html
