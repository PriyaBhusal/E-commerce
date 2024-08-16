const {getAllMen} = require("../services/men_services")
const model =require("../models")

const showMen= async (req, res) => {
  try {
    var result = await getAllMen();
    console.log(result)

    res.status(200).json({ title: "Men fetched succesfully!", data: result });
  } catch (err) {
    res.status(500).json({ title: "Error" });
  }
};
module.exports = {
  showMen :showMen,
};