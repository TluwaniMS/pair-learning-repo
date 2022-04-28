const { createBook } = require("../database-queries/BooksDBQueries");
const { linkBookToUser } = require("../database-queries/UserDBQueries");

const createBookService = async ({ title, authorId, description, price }) => {
  const createdBook = await createBook({
    title: title,
    author: authorId,
    description: description,
    price: price
  });

  await linkBookToUser(authorId, createdBook._id);

  return `Operation completed successfully.`;
};

module.exports = { createBookService };
