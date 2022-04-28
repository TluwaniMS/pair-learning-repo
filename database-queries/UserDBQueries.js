const { UserModel } = require("../Models/UserModel");

const getAllUsers = async () => {
  const users = await UserModel.find();

  return users;
};

const getUserById = async (userId) => {
  const user = await UserModel.findOne({ _id: userId });

  return user;
};

const createUser = async ({ name, surname, email }) => {
  await UserModel.create({
    name: name,
    surname: surname,
    email: email
  });

  return `Operation completed successfully.`;
};

const deleteUser = async (userId) => {
  await UserModel.deleteOne({ _id: userId });

  return `Operation completed successfully.`;
};

const updateUser = async (userId, { name, surname, email }) => {
  const user = await UserModel.updateOne({
    _id: userId,
    name: name,
    surname: surname,
    email: email
  });

  return user;
};

const linkBookToUser = async (userId, bookId) => {
  await UserModel.updateOne(
    {
      _id: userId
    },
    { $addToSet: { books: bookId } }
  );

  return `Operation completed successfully.`;
};

const getUserByEmail = async (email) => {
  const user = await UserModel.findOne({ email: email });

  return user;
};

module.exports = { getAllUsers, deleteUser, updateUser, createUser, getUserById, linkBookToUser,getUserByEmail };
