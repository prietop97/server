
exports.up = function(knex) {
    return knex.schema.createTable('user-update', tbl => {
      tbl.increments();
      tbl
        .string('username')
        .notNullable()
        .unique();
      tbl
        .string('password')
        .notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('user-update')
  };
  