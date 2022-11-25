const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const interactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  post: ObjectId,
  comment: ObjectId,
  createdBy: {
    _id: String,
    email: String,
    role: String
  }
})

const Interaction = mongoose.model('Interaction', interactionSchema)
// Interaction.create({
//   type: 'SAD',
//   post: '637e04c1b1c53c8ff83387f0',
//   comment: '',
//   createdBy: {
//     _id: '1234',
//     email: 'user@example.com',
//     role: 'user'
//   }
// })

const getInteraById = async (idd) => {
  const result = interaction.aggregate([{ $match: { post: { idd } } }]).count()
}
const countInteractions = async () => {
  var result = await Interaction.aggregate().count('status')
  if (result.length === 0) result = [{ status: 0 }]
  return result
}
const toNuOfInOnCo = async () => {
  var result = await Interaction.aggregate([
    {
      $match: { post: '' }
    }
  ]).count('status')
  if (result.length === 0) result = [{ status: 0 }]
  return result
}
const toNuOfInOnPo = async () => {
  var result = await Interaction.aggregate([
    {
      $match: { comment: '' }
    }
  ]).count('status')
  if (result.length === 0) result = [{ status: 0 }]
  return result
}
module.exports = { getInteraById, countInteractions, toNuOfInOnCo, toNuOfInOnPo }
