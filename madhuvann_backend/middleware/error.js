const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  console.log(err.statusCode);
  console.log(err.message);
    err.message = err.message || "Internal Server Error";

//   wrong mongodb id error(cast error)
  if(err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
 