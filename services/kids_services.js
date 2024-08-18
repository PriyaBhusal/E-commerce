const model = require("../models")
 
const getAllKids = async (collection)=>{
    const result = await model.Kids.findAll({
        where:{
            collection:collection 
        },
        raw:true
    })
return result;
}

module.exports={
    getAllKids:getAllKids
}