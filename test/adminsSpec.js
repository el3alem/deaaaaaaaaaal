const supertest = require('supertest')
const { app } = require('../src/index')
const { createJWTToken } = require('../src/utils/authentication')
const expect = require('chai').expect
const request = supertest(app)
// const mar = getnum()
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UzNjQ5NTBhN2M3NTQyNjQ4NGFmMiIsInVzZXJuYW1lIjoiYWRtaW5AZGVhbC5jb20iLCJpYXQiOjE2NjkyMTYxNzJ9.CCBaJWkoOYsFH0aenWlty3ghi-e8AQ3335B1yO5El-o'

describe('Adminscontroller: ', () => {
  it('return Statistics ', async () => {
    const response = await request
      .get('/api/admin/statistics')
      .set('Authorization', `Bearer ${token}`)

    expect(response.body.totalPendingPosts).to.equal(36)
    expect(response.body.totalApprovedPosts).to.equal(13)
    expect(response.body.totalRejctedPosts).to.equal(0)
    expect(response.body.totalPosts).to.equal(49)
    expect(response.body.totalCommentsOnPosts).to.equal(0)
    expect(response.body.totalInteractionsOnPosts).to.equal(6)
    expect(response.body.totalInteractionsOnComments).to.equal(0)
    expect(response.body.totalIntractions).to.equal(6)
  })
})
// "tPnding": 24,
// "tApprved": 13,
// "tRejcted": 0,
// "tPsts": 37,
// "tCmments": 0,
// "tIntras": 6,
// "tnoip": 6,
// "tnoic": 0
// }
