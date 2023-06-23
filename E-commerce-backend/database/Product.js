const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ProductTable = new Schema({
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
module.exports = mongoose.model('Product',ProductTable)
