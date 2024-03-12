const express=require("express");
const app=express();
app.use(express.json())
app.post("/name",(req,res)=>{
    const {name}=req.body;
    console.log(name);
    res.status(200).send(` you have  been successfully login `)
})

app.listen(5000,()=>{
   console.log("fine");
})