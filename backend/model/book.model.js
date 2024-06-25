import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
