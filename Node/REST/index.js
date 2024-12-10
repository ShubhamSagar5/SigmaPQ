const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
const port  = 8080;
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,"public")))



app.use(express.urlencoded({extended:true}))
app.use(express.json())

let posts = [
    {   
        id:uuidv4(),
        username:'hari',
        content:'This is my first blog'
    },
    {   

        id:uuidv4(),
        username:'hari2',
        content:'This is my first2 blog'
    },
    {   

        id:uuidv4(),
        username:'hari3',
        content:'This is my first3 blog'
    }
]

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts})
})

app.get("/posts/new",(req,res)=>{
    
    res.render('new.ejs')
})

app.post('/posts',(req,res)=>{
    let {username,content}  = req.body;
    let id = uuidv4()
    posts.push({id,username,content})
    res.redirect('/posts')
})

app.get("/posts/:id",(req,res)=>{
    const {id} = req.params 
    const post = posts.find((p)=> p.id === id);
    res.render('posts.ejs',post)
})

app.get("/posts/:id/edit",(req,res)=>{
    const {id} = req.params
    
    let  post =  posts.find((p)=> p.id == id);
    
    res.render('edit.ejs',{post})
})

app.patch("/posts/:id",(req,res)=>{
    const {id} = req.params
    let {content} = req.body 
    let  post =  posts.find((p)=> p.id == id);
    post.content = content
    res.redirect('/posts')
})

app.delete("/posts/:id",(req,res)=>{
    const {id} = req.params 
   let post = posts.filter((p)=> p.id !== id);
  
   posts = post;
   res.redirect('/posts')
})

app.listen(port,()=>{
    console.log('Server is listen on port number ' + port );
})