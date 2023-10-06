const File = require("../models/file");

//handler function
exports.localFileUpload = async(req,res) => {
    try{
        //fetch file
        const file = req.files.file;
        console.log("file",file);

        //server not create it self storage with out mentioning flag in index.js
        let path = __dirname + "/files" + Date.now() + `${file.name.split('.')[1]}`;
        file.mv(path , (err) => {
            console.log(err);
        })

        res.status(200).json({
            success:true,
            message:'Local file Upload Succesfully',
        });
    } catch(error) {
        console.log(error);
        // res.status(401).json({
        //     status:false,
        //     message:"failed to upload"
        // });
    }
}
