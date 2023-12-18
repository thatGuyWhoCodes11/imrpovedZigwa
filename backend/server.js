require('dotenv').config()
const { insertBank, register, createJWT, verfiyJWT, login } = require('./middlewares')
const express = require('express')
const app = express()
let date;


app.use(express.json())
app.get('/',verfiyJWT, (req, res, next) => { res.json({ message: 'running since unix time: ' + date }) })


app.post('/register', createJWT, register)
app.post('/login', createJWT, login)
app.post('/insertBank', verfiyJWT ,insertBank)

app.listen(process.env.PORT, () => {
    date = Date.now()
    console.log('server listening on', process.env.PORT)
})