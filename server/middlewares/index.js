const validUrl = require('valid-url');
var abTest = require('express-ab');

const middleware = {
    validateUrl: (req, res, next) => {
        validUrl.isUri(req.body.url)
            ? next()
            : res.status(200).json({ error: "Invalid long url. Please use a valid URL." })
    },
};

module.exports = middleware;