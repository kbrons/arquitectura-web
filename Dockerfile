FROM node:lts-alpine

ARG source

WORKDIR /app

ENV NODE_ENV=production

COPY ./$source/package*.json ./

RUN npm i

COPY ./$source/src src

ENV NODE_PATH=.

ENV PORT=80

ENTRYPOINT ["/usr/local/bin/npm", "run", "start"]