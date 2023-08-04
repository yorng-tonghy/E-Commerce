const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const ContactTable= new Schema({
    id:{
        type:String,
        required:false,
    },
    name:{
        type: String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('Contact',ContactTable)

