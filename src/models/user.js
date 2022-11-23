const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

const Usr = mongoose.model('User', UserSchema)

const getUsr = async (usrname) => {
  try {
    var userr
    await Usr.find({ username: usrname }, function (err, docs) {
      if (err) {
        console.log(err)
      } else {
        userr = docs
      }
    })
      .clone()
      .catch(function (err) {
        console.log(err)
      })
    console.log(userr)
    return userr
  } catch (err) {
    throw new Error(`Could not get user. Error: ${err}`)
  }
}

module.exports = { getUsr }
