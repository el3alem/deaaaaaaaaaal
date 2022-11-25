const dotenv = require('dotenv')

dotenv.config()

const { C_USERNAME, C_Password, DATABSE } = process.env

const mongoose = require('mongoose')

// let _db

mongoose.connect(
  `mongodb+srv://${C_USERNAME}:${C_Password}@nodejs.n10i5.mongodb.net/${DATABSE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    //  useFindAndModify: false,
    useUnifiedTopology: true
  }
)
const _db = mongoose.connection
_db.on('error', console.error.bind(console, 'connection error: '))
_db.once('open', function () {
  console.log('Connected successfully')
})
// .then((client) => {
//   console.log('Connected!')
//   _db = client.db()
//   callback(client)
// })
// .catch((err) => {
//   console.log(err)
// })

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'no data base available'
}

module.exports = { mongoose, getDb }
