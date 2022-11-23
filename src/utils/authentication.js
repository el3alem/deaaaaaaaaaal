import jwt from 'jsonwebtoken'

const tokenSecret = process.env.TOKEN_SECRET 

export const createJWTToken = (id, userEmail) => {
    return jwt.sign({ id, userEmail }, tokenSecret)
}
