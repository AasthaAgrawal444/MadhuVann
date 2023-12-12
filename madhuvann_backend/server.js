const app = require("./app");

const dotenv = require("dotenv")
const dbConnect = require("./config/databse")

//handling uncaught exceptions
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled uncaught exception`);
    process.exit(1);
});

dotenv.config({path:"config/config.env"});

dbConnect();


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//unhandled promise errors

process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);

    server.close(()=>{
        process.exit(1);
    });
});