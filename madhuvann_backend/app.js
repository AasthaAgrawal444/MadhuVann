const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

//Route Imports
const fauna = require("./routes/faunaRoute");

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api/v1", fauna);


//middleware for error
app.use(errorMiddleware);

module.exports = app;
