const express = require('express');
const courseRouter = express.Router();

courseRouter.post("/preview", (req, res) => {
    res.json({ message: "courses preview endpoint" });
});

courseRouter.get("/purchase", (req, res) => {
    res.json({ message: "courses purchase endpoint" });
});

module.exports = { courseRouter };
