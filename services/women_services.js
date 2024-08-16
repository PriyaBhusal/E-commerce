const model = require("../models");

const getAllWomen = async (collection) => {
  const result = await model.women.findAll({
    raw: true,
    where: {
      collection: collection
    }
  });
  return result;
};

module.exports = {
  getAllWomen,
};
``