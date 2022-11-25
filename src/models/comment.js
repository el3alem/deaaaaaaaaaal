const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  post: {
    type: ObjectId,
    required: true
  },
  createdBy: {
    _id: String,
    email: String,
    role: String
  }
})

const Comment = mongoose.model('Comment', commentSchema)

const countComments = async () => {
  var result = await Comment.aggregate().count('status')
  if (result.length === 0) result = [{ status: 0 }]
  return result
}
module.exports = { countComments }
