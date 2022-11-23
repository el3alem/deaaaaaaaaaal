const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createdBy: {
    _id: String,
    email: String,
    role: String
  }
})

const Pst = mongoose.model('Post', postSchema)

const countStatusPsts = async (status) => {
  var result = await Pst.aggregate([{ $match: { status: status } }]).count('status')
  if (result.length === 0) result = [{ status: 0 }]
  return result
}
const countPsts = async () => {
  var result = await Pst.aggregate().count('status')
  if (result.length === 0) result = [{ status: 0 }]
  return result
}
const createPst = async (ttle, bdy, user) => {
  console.log(user)
  try {
    Pst.create({
      title: ttle,
      body: bdy,
      status: 'PENDING',
      createdBy: { _id: user._id, email: user.username, role: user.role }
    })
  } catch (error) {
    throw new Error(`Could not create post. Error: ${err}`)
  }
}
const getAllPsts = async (paage) => {
  try {
    const lmt = 10
    const skipped = (parseInt(paage) - 1) * lmt
    const totalpages = await Pst.aggregate([{ $match: { status: 'APPROVED' } }]).count('total')
    console.log(totalpages)
    var x = Math.floor(totalpages[0].total / lmt)
    var c = true
    var cc = true
    if (paage === 1) cc = false
    if (paage * lmt >= totalpages[0].total) c = false
    if (!totalpages[0].total % lmt === 0) x = x + 1
    const result = await Pst.aggregate([
      { $match: { status: 'APPROVED' } },
      { $sort: { _id: -1 } },

      {
        $facet: {
          data: [{ $skip: skipped }, { $limit: lmt }, { $addFields: { interactions: '3' } }],
          total: [{ $count: 'total' }]
        }
      },

      { $addFields: { page: paage } },
      { $addFields: { limit: lmt } },
      { $addFields: { totalpages: x } },
      { $addFields: { hasNextPage: c } },
      { $addFields: { hasPrevPage: cc } }
    ])

    return result
  } catch (err) {
    throw new Error(`Could not return post. Error: ${err}`)
  }
}
module.exports = { createPst, getAllPsts, countStatusPsts, countPsts }
// {$lookup:{ from: 'users', localField: 'userId', foreignField: 'post', as: 'users' }},
