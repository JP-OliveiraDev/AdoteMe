const jwt = require("jsonwebtoken")

const User = require('../models/User')

// Pegar o usuario via jwt token
const getUserByToken = async (token) => {
    if(!token){
        return res.status(401).json({ message: 'Acesso negado!'})
    }

    const decoded = jwt.verify(token, 'secret')

    const userId = decoded.id

    const user = await User.findOne({ _id: userId })

    return user
}

module.exports = getUserByToken