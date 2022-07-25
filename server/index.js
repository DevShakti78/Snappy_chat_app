const express = require("express");
const userRoutes = require('./routes/userRoutes')
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();



require("dotenv").config();

app.use(cors())

app.use(express.json())

app.use("/api/auth",userRoutes)

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('db connection succesfull')
}).catch((err)=>{
    console.log("err is", err.message)
})

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})