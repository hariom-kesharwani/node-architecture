var appRoot = require('app-root-path');
var winston = require('winston');

var options = {
    file: {
        level: process.env.LOG_LEVEL,
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true,
    },
    console: {
        level: process.env.LOG_LEVEL,
        handleExceptions: true,
        json: true,
        colorize: true,
    },
};

var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});
logger.stream = {
    write: function(message:any, encoding:any) {
        logger.info(message);
    },
};

export = logger;