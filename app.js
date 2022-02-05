const express = require('express');
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Makara:123@cluster0.ypakp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const clien = new MongoClient(url)

const app = express()

//app use express JSON 
app.use(express.json())


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

//create Router to route to aliens.js
const aliensRoutes = require('./routes/aliens')
app.use('/aliens',aliensRoutes)

//console.log to view db connection
con.on('open',function(){
    console.log('connected...')  
}) 

//Server listen to port 9000
app.listen(9000, function(){
    console.log('Server Started')
})
