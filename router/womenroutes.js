const express = require ('express')
const router = express.Router()
const{showWomen}=require("../controller/women_controller")

router.get("/showwomen",showWomen)

module.exports=router;