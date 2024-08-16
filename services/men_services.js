const model= require('../models')

const getAllMen = async () => {
   const result =await model.men.findAll({
   
    raw:true
   }) ;
   
   return result;
}

module.exports={
    getAllMen : getAllMen ,
}