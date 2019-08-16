const Express=require('express');
var app=new Express();
app.get('/',(req,res)=>{
    res.send("Welcome");
});
app.get('/index',(req,res)=>{
     res.render('index.ejs',{title:"Home page"});
});
app.get('/index/login',(req,res)=>{
     res.render('login.ejs',{title:"login page"})
});
app.get('/registration',(req,res)=>{
    res.render('registration.ejs',{title:"Registration page"});
});
app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});