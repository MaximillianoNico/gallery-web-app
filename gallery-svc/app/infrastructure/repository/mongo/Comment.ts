import mongoose from 'mongoose';

// Define schema
const Schema = mongoose.Schema

const tbl_comment = new Schema({
  imageId: {
    type: String
  },
  comment: {
    type: String
  },
  userName: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Compile model from schema
const Comments = mongoose.model("tbl_comment", tbl_comment);

export default Comments;
