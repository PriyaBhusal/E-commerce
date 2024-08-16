const model = require("../models")

const getAllAccessories = async(collection)=>{
    const result = await model.Accessories.findAll({
        where:{
            collection:collection
        },
        raw:true
    })
    return result;

}

module.exports={
    getAllAccessories:getAllAccessories
}