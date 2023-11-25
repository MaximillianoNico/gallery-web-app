import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema

const tbl_images = new Schema({
  owner: {
    type: String
  },
  imageUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Compile model from schema
const Images = mongoose.model("tbl_images", tbl_images);

export default Images;
