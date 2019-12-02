FROM node:alpine

WORKDIR /app

COPY . .

EXPOSE 8001

CMD node server.js
