const express=require("express");
const app=express();


const booksData=require("./book_data")

app.use(express.json())
//  all book
 app.get("/",(req,res)=>{
    
    res.status(200).json(booksData);
 })

//   all books by author
app.get("/:parameter",(req,res)=>{
    const parameter=(req.params.parameter);

    let filter_book=[];
    switch (parameter) {
      case "author":
        const author=req.query.value;
       
          filter_book=booksData.filter((books)=>books.author===author)
      
      break;
      case "title":
         const title=req.query.value;
         
         filter_book=booksData.filter((books)=>books.title===title)
          
       break;   
       
       case "isbn":
         const isbn=req.query.value;
       
         filter_book=booksData.filter((books)=>books.isbn===isbn)
            
       break;   
      
    }

   res.status(200).json(filter_book)
  
  
})


 app.listen(5000,()=>{
    console.log("application is working ");
 })