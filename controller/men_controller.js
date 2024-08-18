const {getAllMen} = require("../services/men_services")
const model =require("../models")

const showMen= async (req, res) => {
  try {
    var shirtResult = await getAllMen('shirt');
    var glassResult = await getAllMen('glass');
    var watchResult = await getAllMen('watch');
    

    res.status(200).json({ title: "Men fetched succesfully!", data: {shirtResult,glassResult,watchResult} });
  } catch (err) {
    res.status(500).json({ title: "Error" });
  }
};
module.exports = {
  showMen :showMen,
};