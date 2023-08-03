#!/bin/bash

# Navigate to the root directory of your React project
cd /Users/muhammadqasim/Desktop/React/All_countries

# Install dependencies (optional, only if needed)
npm install

# Build the production-ready React app
npm run build

# Set variables for server and project paths
server_name="149.28.215.39"
project_path="countries" # Replace with your desired folder name

# Create a separate directory for the React app and copy the static files
mkdir -p /var/www/html/"$project_path"
cp -r build/* /var/www/html/"$project_path"/

# Update Nginx configuration
echo "server {
    listen 5000;
    server_name $server_name;
    root /var/www/html/$project_path;
    index index.html;
    location / {
        try_files \$uri \$uri/ /index.html;
    }
}" > /etc/nginx/sites-available/$project_path

# Create a symlink to enable the Nginx configuration
ln -s /etc/nginx/sites-available/$project_path /etc/nginx/sites-enabled/

# Reload Nginx to apply the changes
sudo systemctl restart nginx
