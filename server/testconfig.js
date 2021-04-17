require('dotenv').config();
const mongoose = require('mongoose')
const shortid = require('shortid')
const connect = require('./config/connect')
const url = process.env.MONGO_DB_URL_TEST;

beforeEach(async done => {
  const db = shortid()
  function clearDB() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function () { })
    }
    return done()
  }
  if (mongoose.connection.readyState === 0) {
    try {
      await connect(url + db)
      clearDB()
    } catch (e) {
      throw e
    }
  } else {
    clearDB()
  }
})
afterEach(done => {
  mongoose.disconnect()
  return done()
})
afterAll(done => {
  return done()
})
