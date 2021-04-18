const controller = require('./db_operations')
const shortId = require('shortid')

const gotoController = {
    create: async (req, res) => {
        const shortened = {
            original: req.body.url,
            short: shortId.generate(),
            api: "goto"
        }
        const data = await controller.createNewShorten(shortened)
        if (data.error) return res.status(500).json(data);
        return res.status(200).json({ success: true, data });
    },
    redirect: async (req, res) => {
        let { shortCode } = req.params
        let data = await controller.getUrlfromShorten(shortCode)
        if (data.error) return res.status(200).json(data)
        return res.status(200).json({ success: true, url: data.original });
    }

};

module.exports = gotoController;