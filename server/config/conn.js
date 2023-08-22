const mongoose = require("mongoose")
require('dotenv').config()
const DB = process.env.DB_URL
const dbConnection=()=>{
    mongoose.connect(DB)
    .then(()=>{
        console.log("connected to database successfully");
    })
    .catch((err)=>{
        console.log("something went wrong", err);
    })
}

module.exports = dbConnection;