import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import dbCards from './dbCards.js'

// App Config
const app=express()
const port= process.env.PORT || 8001
const connection_url=`mongodb+srv://oghenetegaakpowenre:KkaIHd1FptwRmEwq@cluster0.rbxxiu2.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares

// DB Config
mongoose.connect(connection_url)
// API Endpoints
app.get('/',(req,res)=> res.status(200).send('hello world'))
app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body

    Cards.create(dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
app.get('/tinder/cards',(req,res)=>{
    const dbCard=req.body

    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
// Listener
app.listen(port,(req,res)=>console.log(`listening on localhost ${port}`))