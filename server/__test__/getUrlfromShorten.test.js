const Link = require('../models/links')
const controller = require('../controllers/db_operations')
const shortId = require('shortid')

describe('createNewShorten', () => {
  test('create a shorten link', async () => {
    const linkConfig = {
      original: "https://www.youtube.com/",
      short: shortId.generate(),
      count: 1,
      api: "goto"
    }
    const { short } = await controller.createNewShorten(linkConfig)
    const match = await Link.findOne({ short })
    expect(match.short).toBe(short)
  })
})





