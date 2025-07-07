const express = require('express');
const app = express();
const { courseRouter } = require('./routes/course');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');

app.use(express.json()); 
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
