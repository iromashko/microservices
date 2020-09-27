FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
ENV CI=true
CMD ["npm", "start"]