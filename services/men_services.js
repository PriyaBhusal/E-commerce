const model= require('../models')

const getAllMen = async (collection) => {
   const result =await model.men.findAll({
   where:{
        collection:collection
   },
    raw:true
   }) ;
   
   return result;
}

module.exports={
    getAllMen : getAllMen ,
}