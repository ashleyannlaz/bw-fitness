//const db = require("../db-config");

const checkPayload = async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({ status: 401, message: "username and password required" });
  } else {
    next();
  }
};

module.exports = { checkPayload };
