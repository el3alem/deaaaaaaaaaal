const express = require('express')
const { getDb } = require('../utils/database')
// const { getPost, deletePost, getAllPost, updatePost, createPost } =require('../models/Post')
const db = getDb
const { countStatusPsts, countPsts } = require('../models/post')
const { countComments } = require('../models/comment')
const { countInteractions } = require('../models/interaction')

const adminStats = async (req, res) => {
  try {
    console.log('start')
    const tPending = await countStatusPsts('PENDING')
    const tApproved = await countStatusPsts('APPROVED')
    const tRejected = await countStatusPsts('REJECTED')
    const tPosts = await countPsts()
    const tComments = await countComments()
    const tInteras = await countInteractions()
    const result = {
      tPnding: tPending[0].status,
      tApprved: tApproved[0].status,
      tRejcted: tRejected[0].status,
      tPsts: tPosts[0].status,
      tCmments: tComments[0].status,
      tIntras: tInteras[0].status
    }

    res.status(201).json(result)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

module.exports = { adminStats }
