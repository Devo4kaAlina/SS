FROM node:12-alpine

EXPOSE 3000

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . .

RUN npm install 

CMD ["npm", "run", "server:watch"]