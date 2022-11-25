const supertest = require('supertest')
const { app } = require('../src/index')
const assert = require('assert')
// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/api/post/1')

    assert.equal(response.status, 200)
  })
})
