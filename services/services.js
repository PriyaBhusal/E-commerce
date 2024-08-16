const model = require('../models')
const postCrousel = async(req, res) => {
    await model.crousel.create({
        'title': ""
    })
}

const getAllCrousel=async()=>
{
    const result = await model.crousel.findAll({
        include:[
            {
                model:model.crousel,
                as:"crousel",
            }
        ],
        raw:true
    })
          return result
    }


    module.exports={
        getAllCrousel:getAllCrousel
    }