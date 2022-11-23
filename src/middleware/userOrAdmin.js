const jwt = require('jsonwebtoken')
// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split('.')[1]))
//   } catch (e) {
//     return null
//   }
// }

const adminUserAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader ? authHeader.split(' ')[1] : ''

    var decoded = jwt.decode(token)

    if (decoded.username === 'admin@deal.com') {
      res.locals.userData = jwt.verify(token, process.env.ADMIN_SECRET)
    } else {
      res.locals.userData = jwt.verify(token, process.env.TOKEN_SECRET)
    }

    next()
  } catch (err) {
    // @ts-ignore
    err.code = 401
    next(err)
  }
}

module.exports = { adminUserAuth }
