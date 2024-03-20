const express = require("express");
const { BookModel } = require("../model/book.model");
const { isAuth } = require("../middleware/isAuth.middleware");

const bookRouter = express.Router();

// GET all Books
// bookRouter.get("/", async (req, res) => {
//   try {
//     const books = await BookModel.find();
//     res.status(200).json({ mgs: "List of all the books", books });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// GET All Books or by query.
bookRouter.get("/", async (req, res) => {
  console.log(req.query);
  const query = {};
  if (req.query.category) {
    query.category = req.query.category;
  }
  if (req.query.author) {
    query.author = req.query.author;
  }

  try {
    const allBooks = await BookModel.find(query);
    res.status(200).send({ msg: "List of all books", allBooks });
  } catch (err) {
    console.error(err);
    res.status(400).send({ err });
  }
});

// GET Books by ID.
bookRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findById({ _id: id });
    res.status(200).json({ mgs: "Book is Available.", book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update Books by ID.
bookRouter.put("/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ mgs: "Details of Book are updated.", book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Delete Books by ID.
bookRouter.delete("/:id", isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    await BookModel.findByIdAndDelete({ _id: id });
    res.status(202).json({ mgs: "Book is deleted." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Post new Book.
bookRouter.post("/", isAuth, async (req, res) => {
  const { title, author, category, price, quantity } = req.body;
  try {
    const newBook = new BookModel({ title, author, category, price, quantity });
    await newBook.save();
    res.status(201).send({ msg: "New book is added." });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = { bookRouter };
