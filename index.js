const winston = require('winston');
const pathLog = "logs";
const path = require("path");
const {createLogger, format} = require('winston');
const { combine, timestamp, label, printf } = format;
const util = require('util');
const LABEL = "DY-LOGGER!";

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
    transports: [
        // info console log
        new (winston.transports.Console)({
            level: 'info',
            name: 'info-console',
            colorize: true,
            format: combine(
                label({ label: LABEL }),
                timestamp(),
                myFormat,
                format.splat()
            )
        }),
        // info log file
        new (winston.transports.File)({
            level: 'info',
            name: 'info-file',
            colorize: true,
            format: combine(
                label({ label: LABEL }),
                timestamp(),
                myFormat,
                format.splat()
            ),
            filename: path.join(pathLog, 'development-info.log'),
            json: true
        }),
        // errors console log
        new (winston.transports.Console)({
            level: 'error',
            name: 'error-console',
            colorize: true,
            format: combine(
                label({ label: LABEL }),
                timestamp(),
                myFormat
            ),
        }),
        // errors log file
        new (winston.transports.File)({
            level: 'error',
            name: 'error-file',
            colorize: true,
            filename: path.join(pathLog, 'development-errors.log'),
            format: combine(
                label({ label: LABEL }),
                timestamp(),
                myFormat
            ),
            json: true
        })
    ]
});

const info = (tag, message = "") => {
    // console.log(tag, message);
    logger.info(util.format('%o', tag) + " " + util.format('%o', message))
};

const error = (tag, message = "") => {
    // console.log(tag, message);
    logger.error(util.format('%o', tag) + " " + util.format('%o', message))
};

module.exports = {
    info,
    error
};