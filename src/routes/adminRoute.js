const express = require('express')
// import { getUser, deleteUser, getAllUsers, updateUser, createUser } from '../controllers/users'
const { adminStats } = require('../controllers/admin')
// import auth from '../middleware/authorizer'
const { adminAuth } = require('../middleware/adminAuthorizer')
const adminRoute = express.Router()

// userRoute.get('/', auth, getAllUsers)
// userRoute.get('/:id', auth, getUser)
// userRoute.post('/', createUser)

/**
 * @swagger
 * api/admin/statistics
 * get:
 *    description:these get api return statistics
 *    responses:
 * 200:
 *    description: a successful response
 */
adminRoute.get('/statistics', adminAuth, adminStats)
// userRoute.put('/:id', auth, updateUser)
// userRoute.delete('/:id', auth, deleteUser)

module.exports = { adminRoute }
