FROM node:12
RUN mkdir /app
WORKDIR ./app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3009
CMD ["node", "src/index.js"]