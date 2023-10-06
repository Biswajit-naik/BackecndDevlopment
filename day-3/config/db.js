const mongoose = require("mongoose");
require("dotenv").config();

//mongoose connection
exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connection Successful"))
    .catch( (error) => {
        console.log("DB connection Issue");
        console.log(error);
        process.exit(1);
    });
}
