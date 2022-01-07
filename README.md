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

# Deployment of code in local environment
## Backend
> ### Nodejs

1. Navigate to the folder: `$ cd /path/to/take-home-test/backend/` 
2. Run the command: `$ npm install`
3. Run the command: `$ npm run start`
4. The application will be running in `localhost:3000`

## Frontend

# Deployment of code with Dockers
## Backend
> ### Nodejs
1. Navigate to the folder: `$ cd /path/to/take-home-test/backend`
2. Build the image with next cmd: `$ BACKEND=nodejs docker-compose build`
2. Deploy and up with next cmd: `$ BACKEND=nodejs docker-compose up -d`

> ### Python
1. Navigate to the folder: `$ cd /path/to/take-home-test/backend`
2. Build the image with next cmd: `$ BACKEND=python docker-compose build`
2. Deploy and up with next cmd: `$ BACKEND=python docker-compose up -d`

