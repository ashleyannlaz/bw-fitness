const db = require("../db-config");

async function find() {
  const allUsers = await db("users");
  const users = allUsers.map((user) => {
    const userTest = {
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role === true ? "instructor" : "client",
    };
    return userTest;
  });
  return users;
}

async function findBy(filter) {
  const allUsers = await db("users").where(filter).orderBy("id");
  const users = allUsers.map((user) => {
    const userTest = {
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role === true ? "instructor" : "client",
    };
    return userTest;
  });
  return users;
}

async function findById(id) {
  const user = await db("users as u")
    .select("u.id", "u.username", "u.name", "u.role")
    .where("u.id", id)
    .first();

    const userTest = {
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role === true ? "instructor" : "client",
    };
    return userTest;
}

async function add(user) {
  const result = await db("users").insert(user);
  const id = result[0];
  return findById(id);
}

async function update(id, changes) {
  return db("users")
    .where("id", id)
    .update(changes)
    .then((count) => (count > 0 ? findById(id) : null));
}

module.exports = { add, find, findBy, update };
