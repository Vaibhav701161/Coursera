const express = require('express');
const app = express();
const {createCourseRoutes} = require('./routes/course.js')
const {userRouter} = require('./routes/user.js')

app.use("/user", userRouter);

createUserRoutes(app);

createCourseRoutes(app);




const port =3000;

