# Step 1: Build the React app
FROM node:24-slim AS build

WORKDIR /app

# Copy package.json and package-lock.json to the WORKDIR
COPY frontend/package.json ./
COPY frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files to the WORKDIR
COPY frontend/. ./

# Build the React app
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine

# Copy the built files from the build stage to the Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
