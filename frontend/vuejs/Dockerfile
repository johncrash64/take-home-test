FROM node:lts-alpine as build-stage

LABEL maintainer="Jonathan Almanza <john.alm.cam@icloud.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
RUN apk add --update --upgrade --no-cache wget
ADD ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]