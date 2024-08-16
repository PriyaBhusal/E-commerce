const model = require("../models");
const { getAllCrousel } = require("../services/services");
const { getAllWomen } = require("../services/women_services");
const {getAllMen} = require("../services/men_services");
//const { BsCartX } = require("react-icons/bs");
const {getAllAccessories} = require("../services/accessories_services")
const { getAllKids} = require("../services/kids_services")

const homePage = (req, res) => {
  res.render("home", { title: "P3r2.Find Your Best" });
};

const showCrousel = async (req, res) => {
  try {
    var result = await getAllCrousel();
    //console.log(result)
    res.status(200).render("todo", { title: "Todo-list", data: result });
  } catch (err) {
    res.status(500).render("error", { title: "Error" });
  }
  // res.render('todo',{title:"Todo-Page"})
};

const firstPage = (req, res) => {
  res.render("first", { title: "P3r2.Find Your Best" });
};
//console.log(__dirname + '')
const menPage =async (req, res) => {
  try{
    var result =await getAllMen()
    res.render("men", { title: "Men" ,data:result});
  }catch(err){
    res.status(500).render("error",{title:"Error"});
    console.log(err)
    
  }
};

const womenPage = async (req, res) => {
  try {
    var kurtiResult = await getAllWomen('kurthi');
    var topsResult = await getAllWomen('tops');
    var dressesResult = await getAllWomen('dresses');


  

    res.status(200).render("women",{data: {kurtiResult, topsResult, dressesResult}} );
  } catch (err) {
    res.status(500).render("error", { title: "Error" });

  }
};

const kidsPage =async (req, res) => {
  try {

    //console.log('here-------------------------------------')
    var result = await getAllKids();

    // console.log(result);

    res.status(200).render("kids", { title: "kids", data: result });
  } catch (err) {
    res.status(500).render("error", { title: "Error" });
  }
};

const accessoriesPage = async (req, res) => {
  try{
    const ringResult = await getAllAccessories('rings');
    const bagResult = await getAllAccessories('bags')
  const locketResult = await getAllAccessories('lockets')

    res.status(200).render("accessories",{title:"Accesories", data:{ringResult,bagResult,locketResult}})
    }
    catch (err){
        console.log(err)
        res.status(500).render("error",{title:"Error"})
    }
};

const salePage = (req, res) => {
  res.render("sale", { title: "Sale" });
};

const faqPage = (req, res) => {
  res.render("faq", { title: "FAQs" });
};

// const arrayofObjects = [
//     {
//         id: 1,
//         brand: 'test',
//         description: 'category',
//         actualPrice: '10$',
//         discountedPrice: '8$'
//     },
//     {
//         id: 2,
//         name: 'test',
//         category: 'category'
//     },
//     {
//         id: 3,
//         name: 'test',
//         category: 'category'
//     }
// ]

const signinPage = (req, res) => {
  res.render("signIn", { title: "Sign In" });
};

const loginPage = (req, res) => {
  res.render("login", { title: "Login" });
};

const cartIcon = (req, res) => {
  res.render("Cart", { title: "Cart" });
};

const favoriteIcon = (req, res) => {
  res.render("Favorites", { title: "Favorites" });
};

const payment = (req, res) => {
  res.render("Payment", { title: "Payment" });
};
module.exports = {
  homePage: homePage,
  showCrousel: showCrousel,
  firstPage: firstPage,
  menPage: menPage,
  womenPage: womenPage,
  kidsPage: kidsPage,
  accessoriesPage: accessoriesPage,
  salePage: salePage,
  faqPage: faqPage,
  signinPage: signinPage,
  loginPage: loginPage,
  cartIcon: cartIcon,
  favoriteIcon: favoriteIcon,
  payment: payment,
};
