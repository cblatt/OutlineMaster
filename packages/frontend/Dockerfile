FROM node:14.16.1

WORKDIR /packages/frontend

COPY package.json ./ 

RUN npm install

COPY build/ .

CMD ["npx", "serve", "-s", "."]