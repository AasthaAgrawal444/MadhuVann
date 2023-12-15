const Fauna = require("../models/faunaModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("../utils/cloudinary");

//create florafauna
exports.createFloraFauna = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.files.images === "string") {
    images.push(req.files.images);
  } else {
    images = req.files.images;
  }

  let imagesLink = await Promise.all(
    images.map(async (element) => {
      const result = await cloudinary.uploader.upload(element.tempFilePath, {
        folder: "florafaunas",
      });
      // console.log("JDLSFJ");
      console.log(result.public_id);

      // Push an object with public_id and url properties into imagesLink
      return {
        public_id: result.public_id,
        url: result.secure_url,
      };
    })
  );

  // console.log("KLDSJFJ");
  // console.log(imagesLink);

  req.body.images = imagesLink;

  const fauna = await Fauna.create(req.body);

  res.status(201).json({
    success: true,
    fauna,
  });
});

//Get all flora faunas

exports.getallFaunas = catchAsyncErrors(async (req, res) => {
  const apiFeature = new ApiFeatures(Fauna.find(), req.query).search().filter();
  const faunas = await apiFeature.query;

  res.status(200).json({
    success: true,
    faunas,
  });
});

//Get details of one flora or fauna

exports.getFaunaDetails = catchAsyncErrors(async (req, res, next) => {
  const fauna = await Fauna.findById(req.params.id);

  if (!fauna) {
    return next(new ErrorHandler("Flora or Fauna not found", 400));
  }

  res.status(200).json({
    success: true,
    fauna,
  });
});

//Update florafauna details

exports.updateFauna = catchAsyncErrors(async (req, res, next) => {
  let fauna = await Fauna.findById(req.params.id);

  if (!fauna) {
    return next(new ErrorHandler("Flora or Fauna not found", 400));
  }

  fauna = await Fauna.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    fauna,
  });
});
