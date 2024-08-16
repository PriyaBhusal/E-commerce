const{getAllAccessories} = require("../services/accessories_services")

const showAccessories = async(req,res)=>{
    try{
    const ringResult = await getAllAccessories('rings')
    const bagResult = await getAllAccessories('bags')
    const locketResult = await getAllAccessories('lockets')
    res.status(200).json({title:"Accesories fetched successfully", data:{ringResult,bagResult,locketResult}})
    }
    catch (err){
        res.status(500).json({title:"Error"})
    }
}

module.exports={
    showAccessories:showAccessories
}