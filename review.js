
const express = require('express');
const booksData = require('./book_data');


const app = express();


app.use(express.json())
app.get('/books/:title/review', (req, res) => {
    const title = req.params.title;

    const book = booksData.find(book => book.title === title);

    
    if (book) {
     
        const review = book.review;
         res.status(200).json(review)
        
    } else {
        res.status(404).send("Book not found.");
    }
});


app.listen(5000, () => {
    console.log(`Server is running on port `);
});
