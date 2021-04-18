require('dotenv').config();
const controller = require('./db_operations')
const BitlyAPI = require('node-bitlyapi');

//connect to bitlyAPI
const Bitly = new BitlyAPI({
    client_id: process.env.BITLY_CLIENT_ID,
    client_secret: process.env.BITLY_CLIENT_SECRET
});
Bitly.setAccessToken(process.env.BITLY_ACCESS_TOKEN);

const bitlyController = {
    create: async (req, res) => {
        console.log("bitly")
        Bitly.shortenLink(req.body.url, async function (err, results) {
            try {
                results = JSON.parse(results);
                if (!err && results.data && results.data.url) {
                    bitlyUrl = results.data.url;
                    const shortened = {
                        original: req.body.url,
                        short: results.data.url,
                        api: "bitly"
                    }
                    // should be checked after bitly depends on ab implementations
                    const link = await controller.getUrlfromShorten(shortened.short)
                    if (link.error) {
                        const data = await controller.createNewShorten(shortened)
                        if (data.error) return res.status(500).json(data);
                        return res.status(200).json({ success: true, data });
                    }
                    return res.status(200).json({ success: true, data: shortened });
                } else {
                    const error = err || results.status_txt || "Bitly Server Error";
                    return res.status(200).json({ error });
                }
            } catch (e) {
                const error = err || (results ? results.status_txt : { error: 'Back did not received a valid response from Bitly.', bitlyResponse: results });
                res.status(500).json({ error });
            }
        });
    }
}

module.exports = bitlyController;