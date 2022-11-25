const jwt = require('jsonwebtoken')

const tokenSecret = process.env.TOKEN_SECRET

const createJWTToken = (id, userEmail) => {
  return jwt.sign({ id, userEmail }, tokenSecret)
}
module.exports = { createJWTToken }
