const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    book:{
        type : String,
        require : true
    },
    author: {
        type : String,
        require : true,
        unique : true
    },
    published:{ 
        type : Number,
        require : true
    },
    price:{
        type : Number,
        require : true,
    },
    status:{
        type : Number,
        require : true
    }
})

module.exports = mongoose.model('books', BookSchema)