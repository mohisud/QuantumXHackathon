const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const Event = require('./models/events')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'views')))
app.get('/',(req,res)=>{
    return res.sendFile('index.html')
})

app.post('/register',async(req,res)=>{
    try {
    const {name,email} = req.body
     console.log(name,email)
    const broadcast = new Event()
    broadcast.name = name
    broadcast.email= email
    broadcast.details = details
  
        await broadcast.save()
        return res.sendStatus(200).json({
            message:"Successfully created"
        })
    } catch (e) {
        console.log(e.message)
        return res.sendStatus(400).json({error:e.message})
    }
})

mongoose.connect('mongodb+srv://dev:abcd12345@cluster0.ewcrj14.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e.message)
})
app.listen(3000,()=>{
    console.log("listeining at port 3000")
})