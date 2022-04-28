const express = require("express");
const router = express.Router();
const { errorHandler } = require("../Middleware/errorhandler");
const { getAllUsers, updateUser, createUser, getUserById } = require("../database-queries/UserDBQueries");
const { deleteUserService } = require("../Services/user-services");

router.get(
  "/get-all-users",
  errorHandler(async (req, res) => {
    const allUsers = await getAllUsers();

    res.status(200).send({ data: allUsers });
  })
);

router.delete(
  "/delete-user/:id",
  errorHandler(async (req, res) => {
    await deleteUserService();

    res.status(200).send({ message: `succesfully deleted` });
  })
);

router.put(
  "/update-user/:id",
  errorHandler(async (req, res) => {
    const { id } = req.params;
    const { name, surname, email } = req.body;

    await updateUser(id, { name: name, surname: surname, email: email });

    res.status(200).send({ message: `succesfully updated` });
  })
);

router.post(
  "/create-user",
  errorHandler(async (req, res) => {
    const { name, surname, email } = req.body;

    await createUser({ name: name, surname: surname, email: email });

    res.status(200).send({ message: `sucessfully created` });
  })
);

router.get(
  "/get-user/:id",
  errorHandler(async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);

    res.status(200).send(user);
  })
);

module.exports = router;
