import mongoose, { mongo } from "mongoose";

const bookSchema = new mongoose.Schema({

  id: String,
  name: String,
  author: String,
  comment: String,
  about: [{ title: String, publishDate: Date }],

});


module.exports = mongoose.model('Book', bookSchema)
 