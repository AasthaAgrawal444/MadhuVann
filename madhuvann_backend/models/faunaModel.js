const mongoose = require("mongoose");

const faunaSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  scientificname: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter quantity"],
  }, 
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }
  ],
  link: {
    type: String,
    required: [true, "please enter url link"],
  },
  // audio: {
  //   type: Buffer,
  //   required: true,
  // },
  
  category: {
    type: String,
    required: [true, "Please enter category flora or fauna"],
  },
  iucntype: {
    type: String,
    required: [true, "Please enter it's iucn type"],
  },
  iucndef: {
    type: String,
    required: [true, "Please enter it's iucn def"],
  },
  location: {
    type: String,
    required: [true, "Please enter where they are found"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Fauna", faunaSchema);
