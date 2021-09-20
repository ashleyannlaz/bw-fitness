const router = require("express").Router();
const Users = require("./users-model");

// GET ALL USERS
router.get("/", async (req, res, next) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

// UPDATE USER
router.put("/:id", async (req, res, next) => {
  Users.update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
