// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "src/Components/Assets");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype !== "audio/mpeg" && file.mimetype !== "audio/mp3"){
//        req.fileValidationError = "File type must be audio/mpeg and audio/mp3" 
//     }
//     else {
//         cb(null, true);
//     }
// }

// export default upload = multer({ 
//     storage: storage,
//     fileFilter
//  }).single("audio");

//Storing files in multer


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "src/Components/Assets");
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype !== "audio/" && file.mimetype !== "audio/"){
//        req.fileValidationError = "File type must be audio/mpeg and audio/mp3" 
//     }
//     else {
//         cb(null, true);
//     }
// }

// const upload = multer({ 
//     storage: storage,
//     fileFilter,
//  });
