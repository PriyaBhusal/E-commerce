const {getAllKids} = require("../services/kids_services")
// const model =require("../models")
const showKids = async (req,res)=>{
    try{
        console.log('aksjkll;d,as')
        var result = await getAllKids();
        console.log(result);
        res.status(200).json({title:"Kids fetched successfully",data:result})
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