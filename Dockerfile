FROM node:12.13-alpine As development
# Create app directory
RUN mkdir -p /var/www/ticktacbackend

# Install app dependencies
COPY package.json /var/www/ticktacbackend/package.json

RUN npm install 

# Bundle app source
COPY . /var/www/ticktacbackend

WORKDIR /var/www/ticktacbackend


ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3001
CMD [ "npm", "start" ]