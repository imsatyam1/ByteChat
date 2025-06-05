# Offical Node.js image
FROM node:18

# Set Working directory
WORKDIR /backend

# Copy pakage file
COPY package*.json ./

#Install depedencies
RUN npm install 

# Copy app code
COPY . .

# EXPOSE PORT
EXPOSE 8080

# Start app
CMD ["npm", "run", "dev"]