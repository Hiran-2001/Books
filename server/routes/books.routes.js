const express = require("express");
const { createBook, getBooks, updateBook, deleteBook, getBooksById } = require("../controllers/books.controller");
const router = express.Router();

router.post("/add",createBook)
router.get("/books",getBooks)
router.get("/books/:id",getBooksById)
router.put("/books/:id",updateBook)
router.delete("/books/:id",deleteBook)

module.exports = router;