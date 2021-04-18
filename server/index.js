require('dotenv').config();
const cors = require('cors')
const express = require('express');
const connect = require('./config/connect')
const gotoController = require('./controllers/goto')
const { validateUrl } = require('./middlewares');
var abTest = require('express-ab');
var ab = abTest.test('my-ab-test', { cookie: false });

const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// implementing a/b test  70/30 
app.post('/', validateUrl, ab(null, 0.7), gotoController.create)
//app.post('/', validateUrl, ab(null, 0.3), bitlyController.create)

// shorten url redirection
app.get('/:shortCode', gotoController.redirect)


const dbURL = process.env.MONGO_DB_URL;
const port = process.env.PORT
connect(dbURL)
    .then(() => app.listen(port, () => {
        console.log(`API server is running on port ${port}`)
    }))
    .catch(e => console.error(e))


