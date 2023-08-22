const express = require("express");
const { createBook, getBooks, updateBook, deleteBook } = require("../controllers/books.controller");
const router = express.Router();

router.post("/add",createBook)
router.get("/books",getBooks)
router.put("/books/:id",updateBook)
router.delete("/books/:id",deleteBook)

module.exports = router;