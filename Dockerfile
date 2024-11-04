# syntax=docker/dockerfile:1

FROM node:20.13.1-alpine3.19
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "dev"]