const supertest = require('supertest')
const { app } = require('../src/index')
const { createJWTToken } = require('../src/utils/authentication')
const expect = require('chai').expect

const request = supertest(app)
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2RkOTEyNTBhN2M3NTQyNjQ4NGFmMSIsInVzZXJuYW1lIjoiZWxhbGVtQGdtYWlsLmNvbSIsImlhdCI6MTY2OTIwMjc2Mn0.ofan8jkAt2-va7QJbITAAVsEXJpm066G23bcVC1PMME'

describe('Postcontroller: ', () => {
  it('new post', async () => {
    const data = {
      title: 'Test',
      body: 'test body'
    }
    const response = await request
      .post('/api/post/')
      .set('Authorization', `Bearer ${token}`)
      .send(data)

    expect(response.res.statusMessage).to.equal('Created')
  })

  it('show all posts for user', async () => {
    const response = await request.get('/api/post/1')

    expect(response.body[0].total[0].total).to.equal(13)
    expect(response.body[0].page).to.equal('1')
    expect(response.body[0].hasNextPage).to.equal(true)
    expect(response.body[0].data).to.be.an('array')
  })
})
