const { getAllWomen } = require("../services/women_services");
const model =require("../models")

const showWomen = async (req, res) => {
  try {
    var kurtiResult = await getAllWomen('kurthi');
    var topsResult = await getAllWomen('tops');
    var dressesResult = await getAllWomen('dresses');


    console.log(result)

    res.status(200).json({ title: "Women fetched succesfully!", data: {kurtiResult, topsResult, dressesResult} });
  } catch (err) {
    res.status(500).json({ title: "Error" });
  }
};
module.exports = {
  showWomen : showWomen,
};




