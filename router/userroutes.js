var express=require('express')
const router = express.Router()
const {registerUser,loginUser,getUser,getUserById,updateUser,mail} = require('../controller/usercontroller')

router.post("/register",registerUser)
.post("/login",loginUser)
.get("/user",getUser)
.get("/user/:id",getUserById)
.patch("/update/:id",updateUser)
.get("/mail",mail)
module.exports = router;