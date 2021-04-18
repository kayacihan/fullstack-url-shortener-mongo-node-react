const supertest = require("supertest");
const request = supertest("http://localhost:3005")
let shortCode = "" // to use GET request after POST

describe('POST / ', function () {
  it('It should create from new shorten url', function (done) {
    request
      .post("/")
      .send({
        url: "https://www.cihankaya.com.tr/"
      })
      .expect(200)
      .end(function (err, response) {
        shortCode = response.body.data.short
        expect(response.body.success).toBe(true)
        expect(response.body.data.original).toBe('https://www.cihankaya.com.tr/')
        expect(response.body.data.api).toBe('goto')
        expect(response.body.data.short).toHaveLength(9)
        if (err) return done(err);
        return done();
      });
  }, 300000);
});

describe('GET /:shortCode', function () {
  it('It should get long url from shorten url', function (done) {
    request
      .get('/' + shortCode)
      .expect(200)
      .then(response => {
        expect(response.body.success).toBe(true)
        expect(response.body.url).toBe('https://www.cihankaya.com.tr/')
        done();
      })
      .catch(err => done(err))
  }, 300000);
});
