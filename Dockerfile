# Build Environment
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy file penting untuk install dependencies
COPY package.json package-lock.json ./

# Instal package secara clean
RUN npm ci

# Setup environment variables for Development or Production
ARG VITE_ENV=production
ENV VITE_ENV=${VITE_ENV}

# Copy seluruh source code
COPY . .

RUN npm run build

FROM nginx:stable-alpine

# Moving Application Build to the Main Folder of Nginx Web Server
COPY --from=build /app/dist /usr/share/nginx/html

# Replacing the default Nginx configuration
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
