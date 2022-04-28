const { deleteUser } = require("../database-queries/UserDBQueries");
const { deleteMultipleBooksByAuthorId } = require("../database-queries/BooksDBQueries");

const deleteUserService = async (userId) => {
  await deleteUser(userId);
  await deleteMultipleBooksByAuthorId(userId);

  return `Operation completed successfully.`;
};

module.exports = { deleteUserService };
