const express = require('express');
const userRouter = express.Router();
const {userModel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "aladld123"

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

userRouter.get("/purchases", (req, res) => {
    res.json({ message: "user purchases endpoint" });
});

module.exports = { userRouter };