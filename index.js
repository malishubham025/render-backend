const express=require("express");
const app=express();
const cors = require('cors');
app.use(cors());
app.get("/",(req,res)=>{
    res.json("hi");
})
app.get("/hi",(req,res)=>{
    res.json("hi from hi get");
})
app.post("/hi",(req,res)=>{
    res.json("hi from hi");
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("running ...");
})