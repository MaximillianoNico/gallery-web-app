# Dockerfile for Next.js 13
 
# Set the base image
FROM node:18-alpine
 
# Set the working directory
WORKDIR /app
 
# Install yarn
RUN apk add yarn
 
# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./
 
# Install dependencies
RUN yarn install
 
# Copy the application code
COPY . .
 
# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
 
# Build the application
RUN yarn build
 
# Expose the port
EXPOSE 3000
 
# Start the application
CMD ["yarn", "start"]
 
# Add labels
LABEL maintainer="Your Name"
LABEL version="1.0"