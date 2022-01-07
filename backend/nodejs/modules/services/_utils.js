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

/**
 * Appends a object properties as headers of the response
 *
 * @param headersObject the object which properties will be saved has headers
 * @param response A Express Response
 * @param exclude The headers names that must not be copy to the response
 */
 const appendToHeaders = (headersObject, response, exclude=[]) => {
    const excludeHeaders = exclude.map(x => x.toLowerCase());

    if (!headersObject || typeof(headersObject) !== 'object') {
        throw new TypeError('Invalid headers object')
    }

    if (!response || typeof response.append !== 'function') {
        throw new TypeError('Invalid response object, an express ServerResponse expected')
    }

    for (let [k ,v] of Object.entries(headersObject)) {
        if (!excludeHeaders.includes(k.toLowerCase())) {
            response.append(k, v)
        }
    }

    return response
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
        if (error.response.headers) {
            appendToHeaders(error.response.headers, httpResponse)
        }

        httpResponse.status(error.response.status).json({ error: error.response.data });
    } else {
        httpResponse.status(500).json({ error: "Internal server error, unable to handle request" });
    }
};

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
    flattenObject
};