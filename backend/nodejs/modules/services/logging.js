const { transports, format, loggers } = require('winston');
const { json, timestamp, combine } = format;
require('winston-daily-rotate-file');

const env = process.env.NODE_ENV || 'development';


function getLoggerConfig(moduleName) {
    const logger = {
        format: combine(
            timestamp(),
            json()
        ),
        transports: [
            new transports.DailyRotateFile({
                filename: `${moduleName}-%DATE%.log`,
                dirname: 'logs',
                zippedArchive: true,
                maxSize: '50m',
                maxFiles: '7d'
            })
        ],
        level: 'debug' //env !== 'production' ? 'debug' : 'info'
    };

    if (env !== 'production') {
        logger.transports.push(new transports.Console())
    }

    return logger
}

class LoggerHelper {
    static SERVICES_LOG = 'services';
    static API_GITHUB_LOG = 'api-github';

    static init() {
        loggers.add(LoggerHelper.SERVICES_LOG, getLoggerConfig(LoggerHelper.SERVICES_LOG));
        loggers.add(LoggerHelper.API_GITHUB_LOG, getLoggerConfig(LoggerHelper.API_GITHUB_LOG));
    }

    static getLoggerFor(moduleName) {
        return loggers.get(moduleName)
    }
}

module.exports = { LoggerHelper };
