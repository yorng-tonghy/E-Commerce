const { string, required } = require('joi')
const mongoose = require('mongoose')

const table = mongoose.Schema

const PopularTable = new table({
    id:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    image: {
        type: String,
        require: true,
    },
    price:{
        type:String,
        require:true
    },
    star:{
        type:String,
        require:true
    },

    date: {
        type: String,
        default: Date.now()
    }

});
module.exports= mongoose.model('Popular_product',PopularTable)