const express = require ('express')
const router = express.Router()
const{showAccessories}=require("../controller/accessories_controller")

router.get("/showaccessories",showAccessories)

module.exports=router;