ARG NODE_VERSION=20.10.0

# Create build stage
FROM node:${NODE_VERSION}-slim AS build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json /app/

## Install dependencies
RUN npm install

# Copy the rest of the files into the working directory
COPY . .

# Build the application
RUN npm run build

# Create a new stage for the production image
FROM node:${NODE_VERSION}-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files from the build stage
COPY --from=build /app/.output /app/.output
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

# Define environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]
