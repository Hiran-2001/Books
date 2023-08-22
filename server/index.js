const express = require("express")
const app = express()
const cors = require('cors');
const dbConnection = require("./config/conn")
const booksRouter = require("./routes/books.routes")
require('dotenv').config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000
dbConnection()

app.use("/api/",booksRouter)

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`)
})