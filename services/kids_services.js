const model = require("../models")
 
const getAllKids = async ()=>{
    const result = await model.Kids.findAll({
        raw:true
    })
return result;
}

module.exports={
    getAllKids:getAllKids
}