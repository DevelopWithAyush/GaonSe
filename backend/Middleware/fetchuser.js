const jwt = require("jsonwebtoken")
const JWT_SECRET = 'ayushdubey'


const fetchuser = (req,res,next)=>{
    const token = req.header("authToken")
    if(!token){
        res.status(401)
    }
    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user
    } catch (error) {
        res.status(401).send("some internal server problem")
    }
    next()
}

module.exports = fetchuser