const Link = require('../models/links')

describe('Link model tests', () => {
    test('api  must be required', async () => {
        expect.assertions(1)

        try {
            await Link.create({
                original: "https://www.youtube.com/watch?v=DscTDy9sZRg",
                count: 2,
                short: "45654ere"
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('original link must be required', async () => {
        expect.assertions(1)
        try {
            await Link.create({
                api: "bitly",
                count: 2,
                short: "456trhgdfh"
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('short must be required', async () => {
        expect.assertions(1)

        try {
            await Link.create({
                api: "bitly",
                original: "https://www.youtube.com/watch?v=DscTDy9sZRg",
                count: 2
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })
    test('count must be required', async () => {
        expect.assertions(1)

        try {
            await Link.create({
                api: "bitly",
                original: "https://www.youtube.com/watch?v=DscTDy9sZRg",
                short: "567fghfgh",
            })
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })

    test('shortlink must be unique', async () => {
        expect.assertions(1)

        try {
            await Link.init() // wait for index to build
            await Link.create([
                {
                    api: "bitly",
                    original: "https://www.youtube.com/watch?v=DscTDy9sZRg",
                    count: 2,
                    short: "sameid",
                },
                {
                    api: "bitly",
                    original: "https://www.youtube.com/watch?v=DscTDy9sZRg",
                    count: 2,
                    short: "sameid",
                }
            ])
        } catch (e) {
            expect(e).toBeTruthy()
        }
    })


})
