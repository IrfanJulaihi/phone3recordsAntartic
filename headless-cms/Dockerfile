# Use Node.js LTS version as the base image
FROM node:16.17.0-bullseye-slim
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that Strapi will use (defaults to 1337)
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "start"]
