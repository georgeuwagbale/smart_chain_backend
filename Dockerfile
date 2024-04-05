# Start with a base image containing Node.js
FROM node:14-alpine

# Create app directory in Docker
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Transpile TypeScript into JavaScript
RUN npm run build

# Expose the app port
EXPOSE 3000

# Run the app
CMD [ "npm", "run", "start:prod" ]