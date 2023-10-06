const express = require("express");
const app=express();

//port import
require("dotenv").config()
const PORT = process.env.PORT || 3000;

//midleware for json converter
app.use(express.json());
const fileupload = require('express-fileupload');
//inside  this file upload function we pass the parameter flag then it will create tmp directory it self.
app.use(fileupload());

//db connection
const db = require("./config/db");
db.connect();


//cloudinary connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//route mounting
const Upload = require("./routes/Fileupload");
app.use('api/v1/upload',Upload);

//Server runner
app.listen(PORT ,()=> {
    console.log(`Server listing on ${PORT}`);
})
