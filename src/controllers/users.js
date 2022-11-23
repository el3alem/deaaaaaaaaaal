const express = require('express')
const jwt = require('jsonwebtoken')
const { getUsr } = require('../models/user')
const bcrypt = require('bcrypt')

const pepper = process.env.BCRYPT_PASSWORD
const saltRounds = parseInt(process.env.SALT_ROUNDS)

// const getAllUsers = async (_req, res) => {
//     try {
//         const users = await getAllUsrs()
//         res.status(200).json(users)
//     } catch (err) {
//         res.status(400).json(err)
//     }
// }

// const getUser = async (req, res) => {
//     try {
//         const user = await getUsr(parseInt(req.params.id))

//         if (user) {
//             res.status(200).json(user)
//         } else {
//             res.status(404).json('user not found')
//         }
//     } catch (err) {
//         // @ts-ignore
//         res.status(400).json({ e: e.toString() })
//     }
// }
// const varfied = bcrypt.hashSync('password' + pepper, saltRounds)
// console.log(varfied)

const userLogin = async (req, res) => {
  try {
    if (!(req.body.email || !req.body.password)) {
      return res.status(400).json({
        error: 'Missing Email or password'
      })
    }
    console.log(req.body.username)

    // console.log(hashedPassword)
    const user = await getUsr(req.body.email)

    const varified = bcrypt.compareSync(req.body.password + pepper, user[0].password)

    if (!varified) {
      return res.status(401).json({
        error: 'invalid password'
      })
    }
    let token
    if (user[0].username === 'admin@deal.com') {
      console.log('admin')
      tokeen = jwt.sign({ id: user[0].id, username: user[0].username }, process.env.ADMIN_SECRET)

      res.status(201).json(tokeen)
    } else {
      tokeen = jwt.sign({ id: user[0].id, username: user[0].username }, process.env.TOKEN_SECRET)

      res.status(201).json(tokeen)
    }
    // @ts-ignore
  } catch (err) {
    console.log(err)
    return res.status(400).json(err)
  }
}

// const createUser = async (req, res) => {
//     try {
//         if (!(req.body.username || !req.body.password)) {
//             return res.status(400).json({
//                 error: 'Missing username or password',
//             })
//         }

//         const hashedPassword = bcrypt.hashSync(req.body.password + pepper, saltRounds)

//         const user = await createUsr({
//             username: req.body.username ,
//             first_name: req.body.first_name ,
//             last_name: req.body.last_name ,
//             password: hashedPassword,
//         })
//         delete user.password_digest

//         // @ts-ignore
//         user.token = jwt.sign({ id: user.id, username: user.username }, process.env.TOKEN_SECRET )
//         res.status(201).json(user)
//     } catch (err) {
//         return res.status(400).json(err)
//     }
// }

// const updateUser = async (req, res) => {
//     try {
//         if (!req.body.username || !req.body.password) {
//             return res.status(400).json({
//                 error: 'Missing required parameters',
//             })
//         }
//         const user = await updateUsr({
//             id: parseInt(req.params.id ),
//             username: req.body.username ,
//             first_name: req.body.first_name ,
//             last_name: req.body.last_name ,
//             password: req.body.password ,
//         })
//         delete user.password_digest

//         res.status(201).json(user)
//     } catch (err) {
//         res.status(400).json(err)
//     }
// }

// const deleteUser = async (req, res) => {
//     try {
//         await deleteUsr(parseInt(req.params.id ))
//         res.status(200).json({ status: `Deleted user ${req.params.id}` })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }

module.exports = { userLogin }
