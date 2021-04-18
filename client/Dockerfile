FROM node:8.9-alpine

# Create a work directory and copy over our dependency manifest files.
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install --silent && mv node_modules ../

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

RUN npm start