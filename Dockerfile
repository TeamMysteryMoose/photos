
FROM node:9.4.0
WORKDIR /app

COPY package.json .
RUN npm install --quiet

COPY . .

