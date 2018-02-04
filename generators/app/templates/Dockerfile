FROM node:9.5.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install

COPY . /usr/src/app

EXPOSE 8080
CMD ["npm", "start"]
