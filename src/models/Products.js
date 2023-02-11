const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image : {type : String, required : true},
    name : {type : String, required : true},
    price : {type : Number, require : true},
    description : {type : String, required : true}
})

const product = mongoose.model("product", productSchema)

module.exports = product

//creating schema