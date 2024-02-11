const express = require("express")
const app = express()
require('dotenv').config({path:"./config.env.local"});
const cors = require('cors')
const port = process.env.PORT;
require("./Conn/db.js")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',require("./Routers/user.js"))
app.use('/api/product',require("./Routers/product.js"))
app.use('/api/product',require("./Routers/adminProduct.js"))
app.use('/api/cart',require("./Routers/cart.js"))
app.use('/api/review',require("./Routers/review.js"))
app.use('/api',require("./Routers/razorpay.js"))
app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})
