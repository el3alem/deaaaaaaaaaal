const express = require('express')
const { createPst, getAllPsts } = require('../models/post')

const jwt = require('jsonwebtoken')
const { getUsr } = require('../models/user')
const { getInteraById } = require('../models/interaction')

const getAllPosts = async (_req, res) => {
  try {
    const page = _req.params.page
    console.log(page)
    const Posts = await getAllPsts(page)
    console.log('start')

    res.status(200).json(Posts)
  } catch (err) {
    console.log(err)
    res.status(500)
    res.json(err)
  }
}

// const getPost = async (req , res ) => {
//     try {
//         const Post = await getPost(parseInt(req.params.id))
//         res.status(200).json(Post)
//     } catch (err) {
//         res.status(500)
//         res.json(err)
//     }
// }
// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split('.')[1]))
//   } catch (e) {
//     return null
//   }
// }

const createPost = async (_req, res) => {
  try {
    const authHeader = _req.headers.authorization
    const token = authHeader ? authHeader.split(' ')[1] : ''
    var decoded = jwt.decode(token)
    console.log(decoded)
    const user = await getUsr(decoded.username)

    const Post = await createPst(
      _req.body.title,
      _req.body.body,
      // dont forget to change it
      user[0]
    )
    res.status(201).json(Post)
  } catch (err) {
    console.log(err.message)
    res.status(500).json(err)
  }
}

// const updatePost = async (req , res ) => {
//     try {
//         if (!req.body.name) {
//             return res.status(400).json({
//                 error 'Post name is required',
//             })
//         }
//         const Post = await updatePost({
//             id parseInt(req.params.id ),
//             name req.body.name ,
//             price parseFloat(req.body.price ),
//             category req.body.category ,
//             description req.body.description ,
//             url req.body.url ,
//         })
//         res.status(201).json(Post)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

// const deletePost = async (req , res ) => {
//     try {
//         await deletePost(parseInt(req.params.id ))
//         res.status(200).json({ status `Deleted Post ${req.params.id}` })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }
module.exports = { getAllPosts, createPost }
