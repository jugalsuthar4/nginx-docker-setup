const express=require("express")
const app=express()

app.get("/node-server/",(req,res)=>{
    res.status(200).json({msg:"hello from node server"})
})
app.listen(4000,()=>{
    console.log("server started onport 4000")
})