const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../api/data/auth/auth-router.js");
const classRouter = require("../api/data/class/class-router");
const classesRouter = require("../api/data/classes/classes-router");
const usersRouter = require('../api/data/users/users-router')

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/classes", classesRouter);
server.use("/api/class", classRouter);
server.use('/api/users', usersRouter)

server.use((err, req, res, next) => {// eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
