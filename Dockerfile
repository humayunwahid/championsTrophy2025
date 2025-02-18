FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project (except files in .dockerignore)
COPY . .

# Expose the Next.js development server port
EXPOSE 3001

# Start the Next.js app in development mode
CMD ["npm", "run", "dev"]