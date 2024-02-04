const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/user-routes.js');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const app=express();
app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());

app.use('/api',router)
mongoose.connect("mongodb+srv://swapnildabhade555:T85UICnlVFvYpd8g@cluster0.w3fhqig.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000);
    console.log("Connected to te port 5000");
})
.catch((err)=>console.log(err));