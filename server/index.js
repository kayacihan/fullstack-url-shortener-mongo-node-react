require('dotenv').config();
const express = require('express');
const connect = require('./config/connect')
const gotoController = require('./controllers/goto')
const cors = require('cors')

const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', gotoController.create)
app.get('/:shortCode', gotoController.redirect)


const dbURL = process.env.MONGO_DB_URL;
const port = process.env.PORT
connect(dbURL)
    .then(() => app.listen(port, () => {
        console.log(`API server is running on port ${port}`)
    }))
    .catch(e => console.error(e))

module.exports = app

