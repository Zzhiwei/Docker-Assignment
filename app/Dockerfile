FROM node:16-alpine

# env variables
ENV NODE_ENV=production

# set the working directory, initially the container is blank
WORKDIR /app

# "." refers to the root of working directory
# install dependencies
COPY package*.json .

# "--production" means devDependencies will not be installed
RUN npm install --production

# Copying src files
COPY . .

# run the app
CMD ["npm", "start"]