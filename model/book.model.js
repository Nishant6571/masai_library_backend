const mongoose = require("mongoose");

// booksSchema
const bookSchema = mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    category: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
  {
    versionKey: false,
  }
);

const BookModel = mongoose.model("books", bookSchema);

module.exports = { BookModel };
