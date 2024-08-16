const express = require("express")
const router = express.Router()

const {showKids} = require("../controller/kids_controller")

router.get ("/showkids",showKids)

module.exports=router;