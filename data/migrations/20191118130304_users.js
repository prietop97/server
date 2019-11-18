
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username')
      .notNullable()
      .unique();
    tbl
      .string('password')
      .notNullable();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
    //   .references('id')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};
