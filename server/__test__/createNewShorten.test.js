const Link = require('../models/links')
const controller = require('../controllers/db_operations')
const shortId = require('shortid')



describe('getUrlfromShorten', () => {
  test('get original link by shorten code', async () => {
    const link = await Link.create({
      original: "https://www.youtube.com/",
      short: shortId.generate(),
      count: 1,
      api: "goto"
    })
    const { original } = await controller.getUrlfromShorten(link.short)
    expect(original).toBe(link.original)
  })
})



