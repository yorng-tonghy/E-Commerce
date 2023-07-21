require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./database/product.js');
const cors = require("cors")
// ---------------connect to database with env-----------

mongoose.connect(process.env.DATABASE_CONNECTION).then(() => {
    console.log("----> Mongo Database Connected!")
});

var app = express()
app.use(cors())
app.use(express.json())


// ----------------Post------------------

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

app.delete("/products/:id", (req, res) => {
    return Product.findByIdAndDelete(req.params.id).then(() => {
        return res.status(200).json({deleted: "Okay"});
    }).catch(err => {
        return res.status(400).json({
            deleted: "Not Okay!",
            err
        })
    })
})

app.put("/products/:id", (req, res) => {
    const updated = {
        id: req.body.id,
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        star: req.body.star,
        image: req.body.image
    }
    return Product.findByIdAndUpdate(req.params.id, updated).then(() => {
        return res.json({updated: "Okay"});
    })
})

// Vue update function
// function updateProduct(id) {
//     axios.put(`/products/${id}`, {
//         id: "inputId",
//         brand: "inputBrand",
//         ...
//     })
// }

// Vue delete function
// function deleteProduct(id) {
//     axios.delete(`/products/${id}`);
// }


//---------------Get------------------

app.get('/home', (req,res)=>{
    return res.send ("this is home")
})

var port = 9000
app.listen(port)



