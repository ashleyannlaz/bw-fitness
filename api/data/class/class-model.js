const db = require("../db-config");

async function findById(id) {
  const [user] = await db("class_attendees")
    .join("classes", "class_attendees.class_id", "classes.class_id")
    .where("class_attendees.attendees_id", id)
    .select(
      "class_attendees.attendees_id",
      "class_attendees.user_id",
      "class_attendees.class_id",
      "classes.class_name"
    );
  return user;
}

async function findClass(id) {
  const [user] = await db("class_attendees")
    .join("classes", "class_attendees.class_id", "classes.class_id")
    .where("class_attendees.attendees_id", id)
    .select("classes.class_name");
  return user;
}

async function attendance(id) {
  const classAttendees = await db("class_attendees")
    .join("users", "users.id", "class_attendees.user_id")
    .join("classes", "classes.class_id", "class_attendees.class_id")
    .select("users.name", "classes.class_name", "class_attendees.user_id")
    .where("class_attendees.class_id", id);
  const classRoster = classAttendees.map((namesList) => {
    return namesList.name;
  });
  const { class_name } = await findClass(id);
  const classAttendance = {
    attendees: classRoster,
    total_attendees: classRoster.length,
    class_name,
  };
  return classAttendance;
}

module.exports = { findById, attendance };
