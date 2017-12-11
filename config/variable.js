if (process.env.NODE_ENV == "devapi") {
    module.exports = {
        apiPath: 'dev.api.zeepzoop.com'
    };
} else if (process.env.NODE_ENV == "webrex") {
    module.exports = {
        apiPath: 'http://www.webrexstudio.com:3001'
    };
}
else {
    module.exports = {
        apiPath: 'http://www.webrexstudio.com:3001'
    };
}