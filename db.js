const { mongoose, models} = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://vaibhavmittal146:Shalu@2907@cluster0.zsxydja.mongodb.net/");
const ObjectId = mongoose.types.ObjectId;


const userSchema = new Schema({
email: {type:String, unique : true },
password: String,
firstName:String,
lastName:String
});

const adminSchema = new Schema({
email: {type:String, unique : true },
password: String,
firstName:String,
lastName:String
});

const courseSchema = new Schema({
title:String,
description:String,
price:Number,
imageUrl:String,
creatorId:ObjectId
});

const purchaseSchema = new Schema({
userId:ObjectId,
courseId:ObjectId
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

models.export = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}