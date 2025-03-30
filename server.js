const express=require("express")
const app=express()

app.get("/api",(req,res)=>{
    res.status(200).json({msg:"Hello"})
})

app.listen(4000,()=>{
    console.log("server started on port 4000")
})