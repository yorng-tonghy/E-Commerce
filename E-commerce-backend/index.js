require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./database/Product');
const cors = require("cors");
const User = require("./database/User.js");
const Contact = require("./database/Contact");
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
        image: req.body.image,
        desc:req.body.desc,
        imgFront:req.body.imgfront,
        imgBottom:req.body.imgBottom,
        imgTop:req.body.imgTop,
        imgFar:req.body.imgFar,


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
app.get("/detail", (req, res) => {
    Product.find().then(data => {
        return res.json(data);
    })
})
app.get("/detail/:id", (req, res) => {
    Product.findById(req.params.id).then(data => {
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

// app.put("/products/:id", (req, res) => {
//     const updated = {
//         id: req.body.id,
//         brand: req.body.brand,
//         name: req.body.name,
//         price: req.body.price,
//         star: req.body.star,
//         image: req.body.image
//     }
//     return Product.findByIdAndUpdate(req.params.id, updated).then(() => {
//         return res.json({updated: "Okay"});
//     })
// })

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


//Users
app.post("/users", (req, res) => {
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        pwd: req.body.pwd,
        email: req.body.email
    };
    const post = new User(newUser);
    return post.save().then(data => {
        return res.json(data);
    })
})

app.get("/users", (req, res) => {
    User.find().then(data => {
        return res.json(data);
    })
})

//Contacts
app.post("/contacts", (req, res) => {
    const newContact= {
        id: req.body.id,
        name: req.body.name,
        phone:req.body.phone,
        email: req.body.email,
        message:req.body.message
    };
    const post = new Contact(newContact);
    return post.save().then(data => {
        return res.json(data);
    })
})

app.get("/contacts", (req, res) => {
    Contact.find().then(data => {
        return res.json(data);
    })
})

//Popular
app.post("/popular", (req, res) => {
    const newPopular= {
        id: req.body.id,
        name: req.body.name,
        brand: req.body.brand,
        desc: req.body.desc,
    };
    const post = new Popular(newPopular);
    return post.save().then(data => {
        return res.json(data);
    })
})

app.get("/popular", (req, res) => {
    Popular.find().then(data => {
        return res.json(data);
    })
})





