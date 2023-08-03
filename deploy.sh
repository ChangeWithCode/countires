#!/bin/bash

# Navigate to the React app's build folder
cd /Users/muhammadqasim/Desktop/React/All_countries

# Pull the latest changes from the GitHub repository
git pull origin main

# Install dependencies
npm install

# Build the React app
npm run build

# Restart Nginx to apply the changes
sudo systemctl restart nginx
