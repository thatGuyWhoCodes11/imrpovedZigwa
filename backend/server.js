require('dotenv').config()
const db = require('./database')
const express = require('express')
const app = express()
let date;
app.use(express.json())
app.get('/', (req, res, next) => {
    res.send('running since unix time: ' + date)
})
app.listen(process.env.PORT, () => {
    console.log('server listening on', process.env.PORT)
    date = Date.now()
})
app.post('/register',(req,res,next)=>{
    const data=req.body
    console.log(data)
    db.insertMany(data).then((doc)=>{
        if(doc)
            res.statusCode(201)
        else
            res.statusCode(500)
        
    }).catch((err)=>{
        console.log(err)
        res.statusCode(500)
    })
})
app.post('/insertBank',(req,res)=>{
    const {name,cardNum,expDate,cvc,cardHolder}=req.body
    db.updateOne({name},{$set:{hasBank:true},$push:{bankDetails:{cardNum,expDate,cvc,cardHolder}}}).then((doc)=>{
        if(doc)
            res.statusCode(201)
        else
            res.statusCode(500)
    }).catch((err)=>{
        console.log(err)
        res.statusCode(500)
    })
})