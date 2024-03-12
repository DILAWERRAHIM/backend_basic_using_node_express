const express=require("express");
const app=express();
app.use(express.json())
app.post("/name",(req,res)=>{
    const {name}=req.body;
    const { password}=req.body;
    if (!name) {
      res.status(200).send(`username ${name} not exit`)
    }
    if (!password) {
      res.status(200).send(`Invalid password `)
    }
    
    res.status(200).send(`Welcome, ${name}`)
})

app.listen(5000,()=>{
   console.log("fine");
})