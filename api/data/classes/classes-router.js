const router = require("express").Router();
const Classes = require("./classes-model");

// CREATE A NEW CLASS
router.post("/create", async (req, res, next) => {
  Classes.add(req.body)
    .then((classes) => {
      res.status(201).json(classes);
    })
    .catch(next);
});

// GET ALL CLASSES
router.get("/", async (req, res, next) => {
  Classes.find()
    .then((allClasses) => {
      res.status(200).json(allClasses);
    })
    .catch(next);
});

// GET CLASS BY ID
router.get("/:id", async (req, res, next) => {
  Classes.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

// UPDATE CLASS
router.put("/:id", async (req, res, next) => {
  Classes.update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

router.post("/signup", async (req, res, next) => {
  Classes.signUp(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
