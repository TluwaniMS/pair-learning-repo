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
  const user = await UserModel.create({
    name: name,
    surname: surname,
    email: email
  });

  return `Operation completed successfully.`;
};

const deleUser = async (userId) => {
  const user = await UserModel.deleteOne({ _id: userId });

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

module.exports = { getAllUsers, deleUser, updateUser, createUser, getUserById };
