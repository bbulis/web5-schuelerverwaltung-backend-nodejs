FROM node:10
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY build/ build/
EXPOSE 3000

CMD ["npm", "start"]
