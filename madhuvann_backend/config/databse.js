const mongoose = require("mongoose");

const dbConnect = () => {
    try{    
        const conn= mongoose.connect(process.env.MONGODB_URL);
        console.log("connection successful");
    }
    catch(err){
        console.log("connection error");
    }
};

module.exports=dbConnect;