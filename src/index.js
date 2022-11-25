const express = require('express')
// const cors = require('cors')
// const bodyparser = require('body-parser')
const config = require('./utils/config')
const app = express()
const { mongoose } = require('./utils/database')
const cookieParser = require('cookie-parser')
const { router } = require('./routes/indRoute')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
// const csrf = require('csurf')
// const uniRoutes = require('./routes/uni-route')
console.log('htttti3')
// const stuRoutes = require('./routes/stud-route')
console.log('htttti4')
// const csrfMiddleware = csrf({ cookie: true })
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Deal assessment',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:8080/'
      }
    ]
  },
  apis: ['./index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(express.json())

/**
 * @swagger
 * api/admin/statistics
 * get:
 *    description:these get api return statistics
 *    responses:
 * 200:
 *    description: a successful response
 */
app.get('/', (_req, res) => {
  res.redirect('/api')
})
// app.use(cors())
// app.use(
//       bodyparser.urlencoded({
//         extended: true,
//       })
//     )
// app.use(bodyparser.json())

app.use('/api', router)
// app.use('/auth', stuRoutes.routes);
// app.use(cookieParser())
// app.use(csrfMiddleware)

// const db=require('./db')
// let uniRef=db.collection("unis");

// uniRef.get().then((querySnapshot)=>{
//
//         querySnapshot.forEach(document=>{
//
// console.log(document.data());
//         })
// })
mongoose

app.listen(config.port, () => console.log(`server is listening on port ${config.port}...`))
module.exports = { app }
