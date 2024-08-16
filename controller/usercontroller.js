const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const model =require("../models")
const nodemailer = require("nodemailer");

// const homepage = (req,res)=>
// {
//     res.status(200).json({message:"Welcome to the Homepage"})
// }

const registerUser = async(req,res)=>
{
    console.log("register")
    const data = req.body;
    try
    {
       var result=await model.users.findOne({where:{phone:data.phone}})
       if(result)
       {
        res.status(400).json({message:"Phone number already exist"})
       }
       else
       {
        const hashPassword = bcrypt.hashSync(data.password,8)
        data.password=hashPassword
        const addUser =await  model.users.create({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            password:data.password,
            phone:data.phone
        })
        console.log(addUser)
        res.status(201).json({message:"Sucessfully Registered"})
       }
    }
    catch(err)
    {
        res.status(500).json({message:"Internal server error"})
        console.log(err)
    }
}

const loginUser = async(req,res)=>
{
    const data=req.body;
    try{
    var result = await model.User.findOne({where:{phone:data.phone}})
    if(result)
    {
        const isMatched = bcrypt.compareSync(data.password,result.password)
        if(isMatched)
        {
            const token = jwt.sign({id:data.id,phone:data.phone},process.env.JWT_TOKEN_KEY,{expiresIn:"1d"})
            result.password=undefined;
            res.status(200).json({message:"logged in successfull",token:token,data:result})
        }
        else
        {
            res.status(400).json({message:"Invalid credentials"})
        }
    }
    else
    {
        res.status(400).json({message:"invalid credintials"})
    }
}
catch(err)
{
    res.status(500).json({message:"Internal server error"})
    console.log(err)
}
}

const getUser =async (req,res)=>
{
    try
    {
   const result = await model.User.findAll({attributes:{exclude:['password']}})
         res.status(200).json({data: result})
    }
    catch(err)
    {
        res.status(500).json({message:"Internal Server Error"})
    }
}

const getUserById = async(req,res)=>{
    try
    {
        const userId = req.params.id;
        var result = await model.User.findOne({where:{id:userId},attributes:{exclude:['password']}})
        res.status(200).json({message:"User Fetched",data:result})
    }
    catch(err)
    {
        res.status(500).json({message:"Internal Server Error"})

    }
}

const updateUser = async(req,res)=>
{
    try
    {
        const userId = req.params.id;
        const data =req.body;
        const result = await model.User.findOne(data,{where:{id:userId},attributes:{exclude:['password']}})
        res.status(200).json({message:"User updated",data:result})
    }
    catch(err)
    {
        res.status(500).json({message:"Internal Server Error"})
    }
}
const mail = (req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maynard.brekke@ethereal.email",
          pass: "PgCAaapE1NDnAdxp9X",
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Priya bhusal👻" <priya@gmail.com>', // sender address
          to: "dummy12@gmail.com, dummbass.gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello pagal ladke?", // plain text body
          html: "<b>yo html?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        res.json(info)
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error)

}

module.exports={
    registerUser:registerUser,
    loginUser:loginUser,
    getUser:getUser,
    getUserById:getUserById,
    updateUser:updateUser,
    mail :mail
}