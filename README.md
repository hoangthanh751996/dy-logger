# dy-logger

[https://github.com/hoangthanh751996/dy-logger.git](https://github.com/hoangthanh751996/dy-logger.git)

## SUMMARY

A simple logging library for NodeJS

## USAGE

A logger has 5 different levels of logging in a specific order:

    'fatal', 'error', 'warn', 'info', 'debug'
    
Each of these log levels has its own method on the logging instance. You can set the maximum log level on a logger at runtime. 

By default, a logger writes to STDOUT, but given a writeable file path, it will log directly to a file.

### Instantiation:
    npm install dy-logger
    const logger = require('dy-logger');

### Logging:

Any of the logging methods take `n` arguments, which are each joined by ' ' (similar to `console.log()`). If an argument is not a string, it is string-ified by `sys.inspect()`

    logger.info('loading an array', [1,2,3], 'now!');
    //=> info [Sat Jun 12 2010 01:12:05 GMT-0400 (EDT)]  loading an array [ 1, 2, 3, [length]: 3 ] now!
    
## COMMENTS/ISSUES:

F-f-fork it, baby.

## LICENSE

MIT, see the source.