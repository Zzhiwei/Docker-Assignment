FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci 

ENV DEBUG=playground:*

EXPOSE 3000

CMD npm start

