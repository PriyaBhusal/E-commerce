const express = require ('express')
const router = express.Router()
const{showMen}=require("../controller/men_controller")

router.get("/showmen",showMen)

module.exports=router;