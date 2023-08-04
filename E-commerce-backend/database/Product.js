const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ProductTable = new Schema({
    id:{
        type: String,
        required: false
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
    },
    imgFront:{
        type:String,
        require:true
    },
    imgBottom:{
        type:String,
        require:true
    },
    imgTop:{
        type:String,
        require:true
    },
    imgFar:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },

});
module.exports = mongoose.model('Product',ProductTable)
