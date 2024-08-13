const express = require('express');
const {connectMongoDb} = require('./connection');
const userRouter = require('./routes/user.js');
const app = express();
const {logReqRes} = require("./Middlewares");
const PORT = 3000;

//connection of MongoDb
connectMongoDb("mongodb://127.0.0.1:27017/crud");



//Middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));



app.use("/user",userRouter);
app.listen(PORT,() => {
    console.log(`Server Started At ${PORT} Port`);
})