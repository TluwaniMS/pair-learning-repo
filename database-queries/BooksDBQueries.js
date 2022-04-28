const { BookModel } = require("../Models/BookModel");

const getAllBooks = async () => {
  const books = await BookModel.find({});

  return books;
};

const getBookById = async (bookId) => {
  const book = await BookModel.findOne({ _id: bookId });

  return book;
};

const createBook = async ({ title, description, author, price }) => {
  const book = await BookModel.create({
    title: title,
    description: description,
    author: author,
    price: price
  });
  return book;
};

const deleteBook = async (bookId) => {
  const book = await BookModel.deleteOne({ _id: bookId });
  return book;
};

const updateBook = async (bookId, { title, author, description, price }) => {
  const book = await BookModel.updateOne(
    { _id: bookId },
    { title: title, author: author, description: description, price: price }
  );
  return book;
};

module.exports = { createBook, deleteBook,updateBook,getAllBooks, getBookById };
