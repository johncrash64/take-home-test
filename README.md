# take-home-test
Repository to interact with GitHub API commits history

# Prerequisites
## Create a GitHub personal access token

1. Follow the next guide provided by GitHub: [Create a PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Nodejs installed and configured
1. Download nodejs from [Nodejs.org](https://nodejs.org/en/)
2. You can follow the next Guide [How to install](https://nodejs.dev/learn/how-to-install-nodejs)

## Dockers installed and configured
1. Download docker from [Docker.com](https://www.docker.com/products/docker-desktop)

## Python installed and configured
1. Download python from [Python.org](https://www.python.org/downloads/)

## Vuejs installed and configured
1. Download vue-cli from [Vuejs.org](https://vuejs.org/v2/guide/installation.html)
# Deployment of code in local environment
## Backend
> ### Nodejs

1. Navigate to the folder: `$ cd /path/to/take-home-test/backend/nodejs` 
2. Run the command: `$ npm install`
3. Run the command: `$ npm run start`
4. The backend application will be running in `localhost:3000`

> ### Python
1. Navigate to the folder: `$ cd /path/to/take-home-test/backend/python`
2. Run the command: `$ pip install -r requirements.txt`
2. Run the command: `$ python main.py`
4. The backend application will be running in `localhost:3000`

## Frontend

> ### Vuejs
1. Navigate to the folder: `$ cd /path/to/take-home-test/frontend/vuejs`
2. Run the command: `$ npm install`
3. Run the command: `$ npm run serve`
4. The frontend application will be running in `localhost:8080`

# Deployment of code with Dockers
> ### Frontend and Backend
1. Navigate to the folder: `$ cd /path/to/take-home-test`
2. Pass the BACKEND `[python| nodejs]` and FRONTEND `[vuejs]` as arguments
3. Build the image with next cmd: `$ FRONTEND=vuejs BACKEND=nodejs docker-compose build`
4. Deploy and up with next cmd: `$ FRONTEND=vuejs BACKEND=nodejs docker-compose up -d`