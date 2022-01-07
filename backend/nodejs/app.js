const express = require('express');
const cors = require('cors');

require('dotenv').config();
const config = require('./config/config').config;

const { LoggerHelper } = require('./modules/services/logging');
LoggerHelper.init();

const { getEnvironmentType } = require('./modules/services/_utils');

// Get the environment type and DB connection config
const dbConfig = require('./config/config.json')[getEnvironmentType()];

/**
 * Add the Modules to the app
*/
const githubRoute = require('./modules/api-github/route');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.text({ type: '*/xml' }));

app.use((req, res, next) => {
    next();
});

app.use('/api', githubRoute);


app.listen(config.port, config.host, (e) => {
    if (e) {
        throw new Error('Internal Server Error');
    }
    // logger.info(`${config.name} running on ${config.host}:${config.port}`);
    console.log(`App running on host: ${config.host}, port:${config.port}!`);
});
