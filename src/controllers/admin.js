const express = require('express')
const { getDb } = require('../utils/database')
// const { getPost, deletePost, getAllPost, updatePost, createPost } =require('../models/Post')
const db = getDb
const { countStatusPsts, countPsts } = require('../models/post')
const { countComments } = require('../models/comment')
const { countInteractions, toNuOfInOnCo, toNuOfInOnPo } = require('../models/interaction')

const adminStats = async (req, res) => {
  try {
    console.log('start')
    const tPending = await countStatusPsts('PENDING')
    const tApproved = await countStatusPsts('APPROVED')
    const tRejected = await countStatusPsts('REJECTED')
    const tPosts = await countPsts()
    const tComments = await countComments()
    const tnoip = await toNuOfInOnPo()
    const tnoic = await toNuOfInOnCo()
    const tInteras = await countInteractions()
    const result = {
      totalPendingPosts: tPending[0].status,
      totalApprovedPosts: tApproved[0].status,
      totalRejctedPosts: tRejected[0].status,
      totalPosts: tPosts[0].status,
      totalCommentsOnPosts: tComments[0].status,
      totalInteractionsOnPosts: tnoip[0].status,
      totalInteractionsOnComments: tnoic[0].status,
      totalIntractions: tInteras[0].status
    }

    res.status(201).json(result)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

module.exports = { adminStats }
