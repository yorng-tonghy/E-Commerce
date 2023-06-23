require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./database/product.js');
const cors = require("cors")
// connect to database with env
mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    console.log("----> Mongo Database Connected!")
});

var app = express()
app.use(cors())
app.use(express.json())

app.post("/products", (req, res) => {
    const newProduct = {
        id: req.body.id,
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        star: req.body.star,
        image: req.body.image
    };
    const post = new Product(newProduct);
    return post.save().then(data => {
        return res.json(data);
    })
})

app.get("/products", (req, res) => {
    Product.find().then(data => {
        return res.json(data);
    })
})

var port = 9000
//router
app.get('/home', (req,res)=>{
    return res.send ("this is home")
})
app.listen(port)



