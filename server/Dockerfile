FROM node:alpine
WORKDIR /app
COPY . ./
ENV NODE_ENV=production
RUN npm install
ENTRYPOINT ["npm", "run", "start"]