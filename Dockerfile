FROM node:16

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm
RUN npm install

COPY . .

CMD ["npm", "start"]