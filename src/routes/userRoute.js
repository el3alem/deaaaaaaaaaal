const express =require("express") 
// import { getUser, deleteUser, getAllUsers, updateUser, createUser } from '../controllers/users'
const {userLogin}=require('../controllers/users')
// import auth from '../middleware/authorizer'

const userRoute = express.Router()


// userRoute.get('/', auth, getAllUsers)
// userRoute.get('/:id', auth, getUser)
// userRoute.post('/', createUser)
userRoute.post('/login', userLogin)
// userRoute.put('/:id', auth, updateUser)
// userRoute.delete('/:id', auth, deleteUser)

module.exports={userRoute}
