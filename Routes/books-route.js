const express = require("express");
const router = express.Router();
const { getAllBooks, getBookById, updateBook, deleteBook } = require("../database-queries/BooksDBQueries");
const { createBookService } = require("../Services/book-services");
const { errorHandler } = require("../Middleware/errorhandler");

router.get(
  "/get-all-books",
  errorHandler(async (req, res) => {
    const books = await getAllBooks();

    res.status(200).send(books);
  })
);

router.get(
  "/get-book-by-id/:id",
  errorHandler(async (req, res) => {
    const { id } = req.params;

    const book = await getBookById(id);

    res.status(200).send(book);
  })
);

router.delete(
  "/delete-book-by-id/:id",
  errorHandler(async (req, res) => {
    const { id } = req.params;

    await deleteBook(id);

    res.status(200).send({ message: `successfully deleted` });
  })
);

router.post(
  "/create-book",
  errorHandler(async (req, res) => {
    const { _id } = req.user;
    const { title, description, price } = req.body;

    await createBookService({ title: title, description: description, price: price, authorId: _id });

    res.status(200).send({ message: `successfully created` });
  })
);

router.put(
  "/update-book/:id",
  errorHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;

    await updateBook(id, { title: title, description: description, price: price });

    res.status(200).send({ message: `successfully updated` });
  })
);

module.exports = router;
