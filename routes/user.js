const express = require('express');
const userRouter = express.Router();

userRouter.post("/signin", (req, res) => {
    res.json({ message: "signin endpoint" });
});

userRouter.post("/signup", (req, res) => {
    res.json({ message: "signup endpoint" });
});

userRouter.get("/purchases", (req, res) => {
    res.json({ message: "user purchases endpoint" });
});

module.exports = { userRouter };
