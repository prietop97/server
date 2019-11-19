
exports.up = function(knex) {
  return knex.schema.table('users', function(tbl) {
      tbl
        .string('fullname', 255)
        .notNullable()
        .defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', function(tbl) {
      tbl.dropcolumn('fullname')
  })
};
