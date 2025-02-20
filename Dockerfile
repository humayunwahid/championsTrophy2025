# --------------------
# 1. Build stage
# --------------------
FROM node:18 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your files
COPY . .

# Build the Next.js app for production
RUN npm run build

# --------------------
# 2. Production stage
# --------------------
FROM node:18 AS runner

# Set environment variables
ENV NODE_ENV=production

# Create and use /app as our working directory
WORKDIR /app

# Copy only needed files/folders from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

# Expose the port the app will run on (adjust if needed)
EXPOSE 3001

# Start the Next.js app in production
CMD ["npm", "start"]
