var express = require('express')
var http = require('http')
const userrouter = require('./router/userroutes')
const womenRouter = require('./router/womenroutes')
const body_parser = require("body-parser")
require('dotenv').config()
var port = process.env.PORT
const app=express()

const path = require ('path')

//const userroutes = require('./router/userroutes')
const menRouter = require("./router/menroutes")
const webrouter = require('./router/webroutes')
const kidsRouter = require("./router/kidsroutes")
const accessoriesRouter=require("./router/accessoriesroutes")
const expressHbs = require('express-handlebars')

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())

//app.use("/uploads/images/",express.static("uploads/images"))
app.use(express.static(path.join(__dirname,"/public")))

app.use("/",userrouter)
app.use("/women",womenRouter)
app.use("/web",webrouter)
app.use("/men",menRouter)
app.use("/kids",kidsRouter)
app.use("/accesories",accessoriesRouter)

var hbs = expressHbs.create({
   extname:"hbs",
   defaultLayout:"default",
   layoutsDir:__dirname+"/views/layout",
   partialsDir:__dirname+"/views/partials",
   helpers:{}
})
app.engine("hbs",hbs.engine)
app.set("views",path.join(__dirname,"views"))
app.set("view engine","hbs")


var server=http.createServer(app);


server.listen(port,()=>{
   console.log("server is running in http://localhost:"+port);
})
