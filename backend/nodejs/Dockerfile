FROM node:14-alpine

LABEL maintainer="Jonathan Almanza <john.alm.cam@icloud.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "npm","start" ]