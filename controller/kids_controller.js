const {getAllKids} = require("../services/kids_services")
// const model =require("../models")
const showKids = async (req,res)=>{
    try{
        var frockResult = await getAllKids('frock');
        var boysetResult = await getAllKids('boys');
        var girlsetResult = await getAllKids('girls');
        console.log(boysetResult)
        res.status(200).json({title:"Kids fetched successfully",data:{frockResult,boysetResult,girlsetResult}})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({title:"Error"})
    }
}

module.exports={
    showKids :showKids 
}