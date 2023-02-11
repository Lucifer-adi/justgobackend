const express = require('express')
const product = require('../models/Products')
const router = express.Router()

router.get("/get", async (req, res)=> {
    try {
       const products = await product.find().lean().exec()
       res.status(200).send({data : "products", message: "success"}) 
    } catch (error) {
        console.log(error);
        res.status(500).send({data : [], message : "not found server errr"})
    }
})

router.post("/create", async(req, res) =>{
    try {
        const products = await product.create(req.body)
        res.status(201).send({data: "products" , message:"success"})
    } catch (error) {
        console.log(error);
        res.status(404).send({data: [], message: "error"})
    }
})


module.exports = router