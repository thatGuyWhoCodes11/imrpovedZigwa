require('dotenv').config()
const axios = require('axios')
// axios.post(`http://localhost:${process.env.PORT}/register`,{name:'testsss',password:'testing',phoneNum:'94736'}).then((response)=>{
//     console.log(response.data)
// })
// axios.post(`http://localhost:${process.env.PORT}/insertBank`,{name:'test',cardNum:'081273',expDate:'2001',cvc:'939',cardHolder:'the dummy man',token:'jehgsdhth'}).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.response.data)
// })
axios.get(`http://localhost:${process.env.PORT}`).then((response) => { console.log(response) }).catch((err)=>{
    console.log(err.response.status)
})
// axios.post(`http://localhost:${process.env.PORT}/login`,{name:'testsss',password:'testing'}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})