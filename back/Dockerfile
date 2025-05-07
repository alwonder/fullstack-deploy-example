FROM node:20 AS build

WORKDIR /app

RUN npm i -g @nestjs/cli
COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
