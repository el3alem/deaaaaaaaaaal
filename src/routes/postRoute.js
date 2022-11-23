const express = require('express')
// import { getProduct, deleteProduct, getAllProducts, updateProduct, createProduct } from '../controllers/products'
const { getAllPosts, createPost } = require('../controllers/posts')
const { authToken } = require('../middleware/authorizer')
const { adminUserAuth } = require('../middleware/userOrAdmin')

const postRoute = express.Router()

postRoute.get('/:page', getAllPosts)
// postRoute.get('/:id', getProduct)
postRoute.post('/', adminUserAuth, createPost)
// postRoute.put('/:id', updateProduct)
// postRoute.delete('/:id', authToken, deleteProduct)

module.exports = { postRoute }
