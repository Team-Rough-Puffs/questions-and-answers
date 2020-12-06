# Specify parent image
FROM node:14

# Create app directory to contain all application code
WORKDIR /src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
EXPOSE 4040

# Run the command
# CMD ["npm", "start"]