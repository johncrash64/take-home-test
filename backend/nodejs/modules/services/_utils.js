const { LoggerHelper } = require('./logging');
const log = LoggerHelper.getLoggerFor(LoggerHelper.SERVICES_LOG).child({ subm: 'utils' });

const getEnvironmentType = () => {
    const defaultType = 'development';
    const expected = ['production', defaultType, 'testing'];
    let env;

    if (!process.env.NODE_ENV) {
        log.warn(`Required NODE_ENV variables was not configured, setting to default ${defaultType}`);
        env = defaultType;
    } else {
        env = process.env.NODE_ENV.toLowerCase();
        log.debug(`environment type: ${env}`);
    }

    if (!expected.includes(env)) {
        const e = new TypeError(`Unknown environment type ${env}, expecting one of ${expected}`);
        log.error(e);

        throw e;
    }

    return env;
};

const validateParams = (obj, params) => {
    for (let i = 0; i < params.length; i++) {
        if (!obj.hasOwnProperty(params[i])) {
            return false;
        }
    }
    return true;
}

const handleErrors = (error, httpResponse) => {
    log.error(error);

    if (error instanceof TypeError) {
        httpResponse.status(400).json({ error: error.message || error });
    } else if (error.response) {

        httpResponse.status(error.response.status).json({ error: error.response.data });
    } else {
        httpResponse.status(500).json({ error: "Internal server error, unable to handle request" });
    }
};

const successResponse = async (result, message = '') => {
    format = {
        'status': 'success',
        'message': message,
        'data': result
    }
    return format;
}

const errorResponse = async (error) => {
    format = {
        'status': 'failed',
        'error': message,
    }
    return format;
}

const flattenObject = (ob) => {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}

module.exports = {
    getEnvironmentType,
    handleErrors,
    validateParams,
    flattenObject,
    successResponse,
    errorResponse
};