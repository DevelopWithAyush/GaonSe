const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/GaonSe')
.then(()=>{
    console.log("Connection successful")
}).catch(()=>{
    console.log("not connect")
})