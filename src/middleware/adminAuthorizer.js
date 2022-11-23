const jwt = require('jsonwebtoken')

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader ? authHeader.split(' ')[1] : ''

    res.locals.userData = jwt.verify(token, process.env.ADMIN_SECRET)
    next()
  } catch (err) {
    // @ts-ignore
    err.code = 401
    next(err)
  }
}

module.exports = { adminAuth }
