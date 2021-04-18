const Link = require('../models/links')

// getting long url from shortcode
const getUrlfromShorten = async (shortCode) => {
  try {
    const data = await Link.findOneAndUpdate({ short: shortCode }, { $inc: { 'count': 1 } })
    if (data == null) return { error: "Invalid short url" };
    return data //send long url
  } catch (err) {
    return { error: 'Server error' };
  }
}

// creating a new shortcode
const createNewShorten = async (LinkDetails) => {
  try {
    const data = await Link.create({ count: 1, ...LinkDetails })
    return data
  } catch (err) {
    return { error: 'Server error' };
  }
}

module.exports = {
  getUrlfromShorten,
  createNewShorten
}
