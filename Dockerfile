
FROM node:18-alpine as build
LABEL authors="ennio"

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
