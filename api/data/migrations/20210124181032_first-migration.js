exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("user_name").notNullable();
      users.string("user_username", 200).notNullable().unique();
      users.string("user_password", 200).notNullable();
      users.boolean("role").defaultTo(0);
    })

    .createTable("classes", (classes) => {
      classes.increments("class_id");
      classes.string("class_name");
      classes.string("class_type");
      classes.string("class_duration");
      classes.string("class_intensity");
      classes.string("class_location");
      classes.string("class_max");
    })

    .createTable("class_attendees", (attendees) => {
      attendees.increments("attendees_id");
      attendees
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      attendees
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("class_id")
        .inTable("classes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("class_attendees");
  await knex.schema.dropTableIfExists("classes");
  await knex.schema.dropTableIfExists("users");
};
