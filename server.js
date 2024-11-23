const app = require('./index');

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URL)


mongoose.connection.on("error",err =>{
    console.log("error",err)
});


mongoose.connection.on("connected",(res,err)=>{
    console.log("mongoose connected")
});

app.listen(process.env.PORT|| 3000, ()=>{
console.log("server started at",process.env.PORT )
});

