const express=require("express");
const app=express();
const port=8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password}=req.query;//here query use see 
    res.send(`standard Get respose ${user}`);
});

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,password}=req.body;//here we use body (in thunder we have used username wrongly so name proper)
   
    res.send(`standard POST respose${user}`);
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});