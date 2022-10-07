FROM node:16

RUN mkdir server
WORKDIR /server

COPY package*.json ./
COPY yarn.lock /app
RUN yarn install

COPY . .

CMD ["yarn","run","start"]
