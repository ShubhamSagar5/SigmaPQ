const expess = require('express')
const path = require('path')
const app = expess();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/view"))

app.get("/ig/:userName",(req,res)=>{
    const {userName} = req.params
    res.render('home.ejs',{name:userName});

});

app.use("/",(req,res)=>{
    res.send('Hello from the backend')
})



const port = 3000;

app.listen(port,(req,res)=>{
    console.log(`Server is listen on poty number ${port}`)
})

