require('dotenv').config();
const mongoose = require('mongoose');


const LinksSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    index: {
      unique: true,
      dropDups: true
    }
  },
  count: {
    type: Number,
    required: true
  },
  api: {
    type: String,
    enum: ['bitly', 'goto'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model(process.env.LINKS_COLLECTION, LinksSchema);