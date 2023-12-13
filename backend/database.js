require('dotenv').config
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOURI).then(() => console.log('connected on uri:', process.env.MONGOURI)).catch((err) => { console.log('database errored out!, reason: ', err) })

const users = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required:true
    },
    password: {type:String,required:true},
    phoneNum: {type:String,required:true},
    hasBank: {type:Boolean,default:false},
    bankDetails:[{cardNum:String,expDate:String,cvc:String,cardHolder:String}]
})
module.exports=new mongoose.model('users',users)