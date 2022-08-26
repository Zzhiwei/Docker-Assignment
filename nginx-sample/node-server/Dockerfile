FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci 

ENV DEBUG=playground:*

CMD npm start
