const express = require('express')
const path = require('path');
const Chat = require('./models/chat');
const methodOverride = require('method-override')
const dbConnection = require('./config/DatabaseConnection');

const app = express() 

app.use(methodOverride('_method'))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))


app.get("/",async(req,res)=>{

    const data = await Chat.find()
   

    res.render('home.ejs',{data})

   
})

app.get("/chat/new",(req,res)=>{
    res.render("form.ejs")
})

app.post("/chat",(req,res)=>{
    const {to,from,msg} = req.body

    const newUser = new Chat({
        to:to,
        from:from,
        msg:msg,
        createdAt:new Date()
    })

    newUser.save()
    .then(()=>{
        res.redirect("/")
    }).catch((err)=>{
        console.log(err)
    })
})

app.delete("/chat/:id",async(req,res)=>{

    const {id} = req.params
    console.log(id)
     Chat.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.patch("/chat/:id/edit",(req,res)=>{
    const {id} = req.params 
    const {from,to,msg} = req.body

    Chat.findByIdAndUpdate({_id:id},{
        from:from,
        to:to,
        msg:msg,
        createdAt:new Date()
    })
    .then(()=>{
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get("/chat/:id/edit",async(req,res)=>{
    const {id} = req.params
console.log(id)
    const chatData  = await Chat.findOne({_id:id})
    console.log(chatData)
    res.render("edit.ejs",{chatData})
})




dbConnection()
.then(()=>{
    console.log('Database connected Sucessfully');
    app.listen(8080,(req,res)=>{
        console.log('Server is listen on port number 8080')
})
})
.catch((err)=>{
    console.log(err)
})

