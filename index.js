const express = require("express");
const app = express();

const booksData = require("./book_data");
app.use(express.json());

app.put('/books/:title/review', (req, res) => {
    const title = req.params.title;
    const { name, isbn, review } = req.body;

    // Find the book object with the given title
    const book = booksData.find(book => book.title === title);

    // Check if the book is found
    if (book) {
        // Update the review for the book
        book.review = { name, isbn, review };
        res.status(200).send(`Review updated for ${title}`);
    } else {
        res.status(404).send("Book not found.");
    }
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
