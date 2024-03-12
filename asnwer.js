const express=require("express");
const app=express();

const booksData=require("./book_data")

app.get("/book/:isbn",async(req,res)=>{
   const isbn=req.params.isbn;
   get_book(isbn)
   .then(book => {
      if (!book) {
          res.status(404).json({ error: "Book not found." });
      } else {
         console.log(isbn);
      }
  })
  .catch(error => {
      console.error("Error searching by ISBN:", error);
      res.status(500).json({ error: "Internal server error" });
  });
   
})

const get_book=(isbn)=>{

   return new Promise((resolve, reject) => {
      const book = booksData.filter((book)=> book.isbn === isbn);
      resolve(book);
      reject("promise is rejected")
  });
}

app.listen(5000,()=>{
   console.log("application is running");
})