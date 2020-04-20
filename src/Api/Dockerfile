FROM node:10

# This does not work with _store at the moment... will need to fix that issue...

# Create app directory
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run compile-tsc

EXPOSE 3000
CMD [ "node", "build/dist/index.js" ]
