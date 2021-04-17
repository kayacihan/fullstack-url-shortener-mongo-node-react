require('dotenv').config();
const express = require('express');
const connect = require('./config/connect')
const Link = require('./models/links')
const cors = require('cors')

const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
    const mylink = req.body
    const link = await Link.create(mylink)
    res.status(201).json(link.toJSON())
})

app.get('/', async (_, res) => {
    const link = await Link.find({}).lean().exec()
    res.status(200).json(link)
})

const dbURL = process.env.MONGO_DB_URL;
const port = process.env.PORT
connect(dbURL)
    .then(() => app.listen(port, () => {
        console.log(`API server is running on port ${port}`)
    }))
    .catch(e => console.error(e))

