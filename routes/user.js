const express = require('express');
const userRouter = express.Router();
const {userModel,purchaseModel} = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const {JWT_USER_PASSWORD} = require("../config");
const { courseRouter } = require('./course');


userRouter.post("/signin", async function(req, res) {
    const {email,password}  = req.body;

    const user = await userModel.findOne({
        email:email,
        password:password
    })

    if(user){
       const token=jwt.sign({
            id: user._id
        },JWT_USER_PASSWORD);
        res.json({
            token:token
        })
    }else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
    
    res.json({ message: "signup endpoint" });
});

userRouter.post("/signup", async function(req, res) {
    const {email , password , firstName , lastName} = req.body; 
    try{
        if (!email || !password || !firstName || !lastName){
            return res.status(400).json({message: "All the fields are requires"})
        }

        const existingUser = userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email alreasy in use"})
        }

        const hashPassword  = await bcrypt.hash(password,10);

        await userModel.create({
     email : email,
     password:hashPassword,
     firstName:firstName,
     lastName:lastName
    })
    res.json({ message: "signup endpoint" });

    const token = jwt.sign({id: newUser._id}, JWT_USER_PASSWORD)

    res.json({
        message:"usser created successfully",
        token: token
    })

    } catch(error){

       console.error(error)
       res.status(500).json({messgae:"server error , please try again later!"})

    }

    
    
    
});

userRouter.get("/purchase", userMiddleWare ,async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
// TODO:expecting user to pay i.e. : a payment gateway is needed here
    res.json({ message: "user purchases endpoint" });
});

courseRouter.get("/preview", async function(req,res){
    const courses  = await coursemodel.find({});
    res.json({
        courses
    })

    userRouter.get("/purchases", userMiddleWare ,async function(req, res) {
    const userId = req.userId;
    
// should check if the user had actually paid the price or not ?
   const purchases= await purchaseModel.find({
        userId
    })

    res.json({ purchases});
});
})

module.exports = { userRouter };