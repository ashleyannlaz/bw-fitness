const router = require("express").Router();
const Classes = require('./class-model')

router.get("/:id", async (req, res, next) => {

    Classes.attendance(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;