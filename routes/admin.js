const express = require('express');
const adminRouter = express.Router();
app.use(express.json());
const {adminModel} = require('../db');
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require('../middleware/admin');

adminRouter.post("/signin", (req, res) => {
    res.json({ message: "signin endpoint" });
});

adminRouter.post("/signup", (req, res) => {
    res.json({ message: "signup endpoint" });
});

adminRouter.post("/courses",async function(req,res) {
    const adminId = req.userId;
    const {title , description , imageurl , price} = req.body;

   const course=  await courseModel.create({
        title , description , imageurl , price, creatorId: adminId
    })
    res.json({ message: "create course" })
    courseId = course._id;
})

adminRouter.put("/courses",adminMiddleware,async function(req,res) {
    const adminId = req.userId;
    const {title , description , imageurl , price , courseId} = req.body;

   const course=  await courseModel.updateOne({
    _id : courseId,
    creatorId:adminId
   },{
        title , description , imageurl , price
    })
    res.json({ message: "updated the course" })
    courseId = course._id;
})

module.exports = {adminRouter};