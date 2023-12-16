const express = require("express");
const app = express();
const cors = require("cors");

const errorMiddleware = require("./middleware/error");
const fileUpload = require("express-fileupload");

var corsOptions = {
  origin: "http://localhost:6000",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT",
};

// 👇️ configure CORS
app.use(cors());

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
