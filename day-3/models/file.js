const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const File = mongoose.model("File",fileSchema);
module.exports = File;

