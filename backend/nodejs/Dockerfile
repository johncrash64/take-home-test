FROM node:14-alpine

LABEL maintainer="Jonathan Almanza <john.alm.cam@icloud.com>"

WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "/app/"]

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "npm","start" ]