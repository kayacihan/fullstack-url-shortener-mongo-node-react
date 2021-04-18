# A URL shortener Using React and Node with a/b testing
A url shortener Using React, Node, Mongo and Docker with implementing a/b testing (70/30 - Own API/Bitly). 
- These attiributes will be stored on MongoDB.
    - Long URL
    - Shorten URL
    - API ( Own API / Bitly )
    - Count (for Own API)

## Table of Contents

- [Requirements](#requirements)
- [Commands](#commands)
    - [ Environment variables](#environment-variables)
    - [ Installation ](#installation)
    - [ Running ](#running)
- [API Documentation](#api-documentation)
    - [Mongo Atlas](#MongoDB-Atlas-setting)
    - [Bitly Setting](#Bitly-setting)



## Requirements
* [Docker](https://docs.docker.com/get-docker/) 
* [Docker-compose](https://docs.docker.com/compose/install/)
* [NodeJs](https://nodejs.org/en/download/)
* [Bitly Api](https://dev.bitly.com/) 
## Commands


* ### Installation
```bash
git clone https://github.com/kayacihan/fullstack-url-shortener-mongo-node-react.git

cd fullstack-url-shortener-mongo-node-react/
```

* ### Edit Env File
Set the  [ environment variables](#environment-variables) and   [get a Bitly account](#Bitly-setting)

```bash
# open .env and modify the environment variables 
cp .env.example .env
```

* ### Running
    - #### run using docker-compose
        This command will start MongoDB, Node and React App On Docker Containers.  
        ```bash
        sudo docker-compose up 
        ```
        If you have cache issues, You can try this command  
        ```bash
        docker-compose down -v --rmi "all" 
        ```
    * #### run manually
    
        You should have a local MongoDB server or [Mongo Atlas](#MongoDB-Atlas-setting) and MONGO_DB_URL should be modified in the `.env` file. 

        - run api 

            ```bash
            cd server

            npm install

            node index.js
            ```

        - run client

            ```bash
            cd client
            
            npm install
            
            node start 
            ```

        * ### Website will be running on 3333 port

            * [localhost:3333](https://localhost:3333/)

    * #### run tests

        ```bash
        # goto nodejs folder
        cd server

        # run all tests
        npm run test

        ```

## Environment Variables

The environment variables can be found on Server ( /server ) and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3005

# URL of the Mongo DB for Docker
MONGO_DB_URL = mongodb://mongo/link
# URL of the Mongo DB for local
MONGO_DB_URL = mongodb://localhost:27017/link

# URL of the Mongo DB for testing
MONGO_DB_URL_TEST = mongodb://localhost:27017/test

# Mongo DB Collection
LINKS_COLLECTION = shortlink

# Bitly
# Bitly settings
BITLY_CLIENT_ID = thisisclientidsample
BITLY_CLIENT_SECRET = thisisclientsecretsample
BITLY_ACCESS_TOKEN = thisisaccesstokensample

```

## Documentation


The backend uses MongoDB Atlas cloud service and Bitly url shortener, so you will need to open the following free accounts.

### MongoDB Atlas setting:
    * Open a account in https://www.mongodb.com/cloud
    * Create a cluster
    * Create a user going to Security > Database Access and choosing Read and write to any database for Database user privileges 
    * Under Security > Network Access click on Add IP address and fill Whitelist entry with 0.0.0.0/0 to allow access from everywhere
    * Under Atlas > Clusters click on Connect button, choose Connect your app, then driver Node.js and copy the Connection string, it would be similar to mongodb+srv://`yourUsername`:`yourPassword`@<clusterName>.mongodb.net/test?retryWrites=true&w=majority
    * Copy that string into .env variable `MONGO_DB_URL` and for `LINKS_COLLECTION` put the collection name you like, for example Links
    
### Bitly setting:
    * Open a account in https://bitly.com
    * Go to Profile settings > Generic access token and after entering your password click on Generate token
    * Register your app going to Profile settings > Registered OAuth Apps and you will get your Client ID and Client secret
    * Copy them into .env variables `BITLY_ACCESS_TOKEN`, `BITLY_CLIENT_ID` and `BITLY_CLIENT_SECRET`
    
