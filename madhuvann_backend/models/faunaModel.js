const mongoose = require("mongoose");

const faunaSchema = new mongoose.Schema({
  name: {
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
  image: 
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
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
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref: "Admin",
//     required: true,
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Fauna", faunaSchema);
