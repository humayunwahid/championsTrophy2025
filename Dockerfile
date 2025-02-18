FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (except files in .dockerignore)
COPY . .

# Expose the development server port
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]