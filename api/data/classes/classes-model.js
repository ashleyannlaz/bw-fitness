const db = require("../db-config");

// finds all classes:
async function find() {
  const allClasses = await db("classes");
  const users = allClasses.map((classes) => {
    const formattedClasses = {
      class_id: classes.class_id,
      class_name: classes.class_name,
      class_type: classes.class_type,
      class_duration: classes.class_duration,
      class_intensity: classes.class_intensity,
      class_location: classes.class_location,
      class_max_attendees: classes.class_max,
    };
    return formattedClasses;
  });
  return users;
}

// find class by id
async function findById(id) {
  const [classes] = await db("classes")
    .where("class_id", id)
    .select(
      "class_id",
      "class_name",
      "class_type",
      "class_duration",
      "class_intensity",
      "class_location",
      "class_max"
    );
  const formattedClasses = {
    class_id: classes.class_id,
    class_name: classes.class_name,
    class_type: classes.class_type,
    class_duration: classes.class_duration,
    class_intensity: classes.class_intensity,
    class_location: classes.class_location,
    class_max_attendees: classes.class_max,
  };
  return formattedClasses;
}

// add class
async function add(classes) {
  const [id] = await db("classes").insert(classes, "class_id");
  return findById(id);
}

// update class
async function update(id, changes) {
  return db("classes")
    .where("class_id", id)
    .update(changes)
    .then((count) => (count > 0 ? findById(id) : null));
}

//sign up for classes
async function signUp(signup) {
  const [newSignup] = await db("class_attendees").insert(signup, "attendees_id");
  const [classSignup] = await db("class_attendees")
    .join("users", "class_attendees.user_id", "users.id")
    .join('classes',"class_attendees.class_id", 'classes.class_id' )
    .select("class_attendees.class_id", "class_attendees.user_id", 'users.name', 'classes.class_name')
    .where("class_attendees.attendees_id", newSignup);
  return classSignup;
}

// select class_attendees.class_id, users.name, classes.class_name
// from class_attendees
// inner join users on users.id=class_attendees.user_id
// inner join classes on classes.class_id=class_attendees.class_id
// where class_attendees.class_id=2;

module.exports = {
  find,
  findById,
  add,
  update,
  signUp,
};
