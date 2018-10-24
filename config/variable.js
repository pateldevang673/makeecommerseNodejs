if (process.env.NODE_ENV == "dev") {
    module.exports = {
        apiPath: 'http://dev.api.zeepzoop.com'
    };
} else if (process.env.NODE_ENV == "production") {
    module.exports = {
        apiPath: 'https://api.zeepzoop.com'
    };
} else {
    module.exports = {
        apiPath: 'https://api.zeepzoop.com'
    };
}