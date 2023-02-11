// const path = require('path')
const express = require('express')
const ProductController = require('./controllers/ProductController')
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("<h3>wlecome</h3>")
});

//creating path to use controller

app.use('/product', ProductController)

module.exports = app