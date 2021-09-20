const router = require("express").Router();
const Users = require("../users/users-model");
const helpers = require("./build-token");
const bcrypt = require("bcryptjs");
const { checkPayload } = require("./auth-middleware");

// REGISTER NEW USER
router.post("/register", async (req, res, next) => {
  const {username, password, name, role} = req.body
  const hash = bcrypt.hashSync(password,8)  
  Users.add({name, username, password: hash, role})
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

// LOGIN USER
router.post("/login", checkPayload, async (req, res, next) => {
  try {
    const { username } = req.body;
    const [currentUser] = await Users.findBy({ username });

    const token = helpers.buildToken(req.body.username);
    res.status(200).json({
      token,
      currentUser,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
