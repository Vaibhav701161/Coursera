const express = require('express');
const adminRouter = express.Router();
app.use(express.json());
const {adminModel} = require('../db');

adminRouter.post("/signin", (req, res) => {
    res.json({ message: "signin endpoint" });
});

adminRouter.post("/signup", (req, res) => {
    res.json({ message: "signup endpoint" });
});

adminRouter.post("/courses", function(req,res) {
    res.json({ message: "create course" })
})

module.exports = {adminRouter};