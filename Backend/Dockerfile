FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "node", "index.js" ]