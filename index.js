const express = require('express');
const app = express();
const { courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');

app.use(express.json()); 
app.use("/user", userRouter);
app.use("/course", courseRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
