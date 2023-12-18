require('dotenv').config()
const db = require('./database')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
const createJWT = (req, res, next) => {
    const name = req.body.name
    const token = JWT.sign({ name }, process.env.JWT_TOKEN, { expiresIn: '1h' })
    res.locals.token = token
    next()
}
const verfiyJWT = function (req, res, next) {
    const token = req.body || req.query
    if (!token) {
        return res.status(401).json({ message: 'please login first' })
    }
    JWT.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'invalid token format, or token expired' })
            console.log(err)
            return
        }
        console.log(decoded)
        next()
    })
}
const register = (req, res, next) => {
    const data = req.body
    data.password = bcrypt.hashSync(data.password, 10)
    db.insertMany(data).then((doc) => {
        if (doc)
            res.json({ status: 'success!', token: res.locals.token })
        else
            res.json({ error: 'internal error' })

    }).catch((err) => {
        console.log(err)
        res.json({ error: 'internal error' })
    })
}

const insertBank = (req, res) => {
    const { name, cardNum, expDate, cvc, cardHolder } = req.body
    db.updateOne({ name }, { $set: { hasBank: true }, $push: { bankDetails: { cardNum, expDate, cvc, cardHolder } } }).then((doc) => {
        if (doc)
            res.json({ status: 'success!' })
        else
            res.json({ error: 'internal error' })
    }).catch((err) => {
        console.log(err)
        res.json({ error: 'internal error' })
    })
}

const login = (req, res, next) => {
    const { name, password } = req.body
    db.findOne({ name }).then((doc) => {
        if (!doc) {
            res.status(400).json({ message: 'wrong password or username' })
            return
        }
        if (!bcrypt.compareSync(password, doc.password)) {
            res.status(400).json({ message: 'wrong password or username' })
            return
        }
        res.status(200).json({ message: 'login successful!', token: res.locals.token })
    }).catch((err) => { console.log(err); res.status(500) })
}
module.exports = { register, insertBank, createJWT, verfiyJWT, login }