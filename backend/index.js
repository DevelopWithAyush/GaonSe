const express = require("express")
const app = express()
const cors = require('cors')
const port = 5000;
require("./Conn/db.js")

app.use(cors())
app.use(express.json())
app.use('/api/auth',require("./Routers/user.js"))
app.use('/api/product',require("./Routers/product.js"))
app.use('/api/product',require("./Routers/adminProduct.js"))
app.use('/api/cart',require("./Routers/cart.js"))
app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})
