const express = require('express');
const userRouter = express.Router();
const {userModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config")
const { purchaseModel} = require("../db");
const { courseRouter } = require('./course');


userRouter.post("/signup", async function(req, res) {
    const {email,password}  = req.body;
// TODO: ideally the passowrd should be hashed , and hence you can't compare the user provided password and the database password
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

userRouter.post("/signin", async function(req, res) {
    const {email , password , firstName , lastName} = req.body; // todo : add zod validation
    // todo: hash the password so that the password is not stored as plaintext

    //todo : put inside a try catch block 
    await userModel.create({
     email : email,
     password:password,
     firstName:firstName,
     lastName:lastName
    })
    res.json({ message: "signin endpoint" });
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