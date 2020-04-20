FROM node:alpine AS builder

ADD package.json /app/

WORKDIR /app

COPY . .

RUN npm install &&\
    npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf.template

COPY --from=builder /app/dist/* /usr/share/nginx/html/
