FROM node:10

WORKDIR /usr/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 1234

CMD ["npm", "start"]