const bookModel = require("../models/bookModel");

exports.createBook=async(req,res)=>{

    const { book, author, published, price, status } = req.body;
    if (!book || !author || !published || !price || !status) {
        res.status(422).send("please fill all fields");
        console.log("plese fill all fileds");
      }else{
        try {
    
              const createBook = new bookModel({
                book, author, published, price, status
              });
              await createBook.save();
              res.status(201).send(createBook);
            }catch(err){
                res.status(404).json(err)
            }
          
        }
}

exports.getBooks=async(req,res)=>{
    try {
        const books = await bookModel.find();
        res.status(200).json(books);
      } catch (err) {
        res.status(404).json(err)
      }
    
}

exports.getBooksById=async(req,res)=>{
 
    try {
      const { id } = req.params;
      const book = await bookModel.findById({ _id: id });
      res.json(book).status(422);
    } catch (err) {
      res.status(422).send(err);
    }

}
exports.updateBook=async(req,res)=>{
    const { book, author, published, price, status } = req.body;
    if (!book || !author || !published || !price || !status) {
      res.status(422).send("please fill all fields");
      console.log("please fill all fileds");
    }else{
      try {
        const {id} = req.params
    
      const updatedBook = await bookModel.findByIdAndUpdate(id,req.body,{
        new : true
      })
    
        console.log(updatedBook);
        res.status(201).json(updatedBook)
      
      } catch (err) {
        res.status(422).json(err)
      }
    }
}

exports.deleteBook=async(req,res)=>{
    try {
        const {id} = req.params
        const book = await bookModel.findByIdAndDelete({_id:id})
         if(!book){
          res.send("no such book to delete")
         }
        res.status(201).json({message:"succesfully deleted"})
      } catch (error) {
        res.status(422)
       }
}