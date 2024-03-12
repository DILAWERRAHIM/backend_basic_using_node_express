const express=require("express")
const app=express()

const booksData=require("./book_data")
app.use(express.json())
app.delete('/books/:title/review/:name/:isbn', (req, res) => {
   const title = req.params.title;
   const isbn=req.params.isbn;
   const name=req.params.name;
   

   // Find the book object with the given title
   const bookIndex = booksData.findIndex(book => book.title === title);

   // Check if the book is found
   if (bookIndex !== -1) {
       // Delete the review for the book
       booksData[bookIndex].review = {};
       res.status(200).send(`Review deleted for ${title} having isbn ${isbn} from user ${name}`);
   } else {
       res.status(404).send("Book not found.");
   }
});

// Start the server
app.listen(5000, () => {
   console.log(`Server is running on port `);
});