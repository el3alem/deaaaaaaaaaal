const superpass = require('supertest')
const { app } = require('../src/index')
const { createJWTToken } = require('../src/utils/authentication')
const expect = require('chai').expect

const request = superpass(app)
const token = createJWTToken(1, 'Bearer')
const assert = require('assert')

describe('Users controllers: ', () => {
  it('login user', async () => {
    const data = {
      email: 'elalem@gmail.com',
      password: 'password143'
    }
    const response = await request.post('/api/user/login').send(data)
    expect(response.statusCode).to.equal(201)
    // console.log('ll')
    // console.log(response)

    // assert.equal(response.status, 200)
  })

  it('fail-username not sent', () => {
    const data = {
      password: 'password143'
    }
    request
      .post('/api/user/login')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .expect('Content-Type', 'application/json')
      .expect(400)
      .expect({
        error: 'Missing username or password'
      })
  })

  it('fail- password not sent', () => {
    const data = {
      username: 'elalemm@gmail.com'
    }
    request
      .post('/api/user/login')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .expect('Content-Type', 'application/json')
      .expect(40)
      .expect({
        error: 'Missing username or password'
      })
  })
})
