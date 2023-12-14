// import cloudinary from "cloudinary";
require("dotenv").config();

const cloudinary = require("cloudinary").v2;
console.log(
    {  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
        api_key: process.env.CLOUDINARY_CLIENT_API,
        api_secret: process.env.CLOUDINARY_CLIENT_SECRET,}
);
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

module.exports = cloudinary;