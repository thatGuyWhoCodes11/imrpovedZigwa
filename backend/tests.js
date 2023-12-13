require('dotenv').config()
const axios=require('axios')
// axios.post(`http://localhost:${process.env.PORT}/insertBank`,{name:'test',password:'testing',phoneNum:'94736'}).then((data)=>{
//     console.log(data)
// })
axios.post(`http://localhost:${process.env.PORT}/insertBank`,{name:'test',cardNum:'081273',expDate:'2001',cvc:'939',cardHolder:'the dummy man'}).then((data)=>{
    console.log(data)
})