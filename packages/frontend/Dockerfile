FROM node:14.16.1

WORKDIR /packages/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "serve", "-s", "./build"]