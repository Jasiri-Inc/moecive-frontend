import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: String,
  name: String,
  author: String,
  comment: String,
  about: [{ title: String, publishDate: Date }],

});


const book = mongoose.model('book', bookSchema)
module.exports = book;