const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connect = (url) => mongoose.connect(url, {
  poolSize: 30, bufferMaxEntries: 0, useNewUrlParser: true, useUnifiedTopology: true
})


module.exports = connect
