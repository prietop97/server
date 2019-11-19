
exports.up = function(knex) {
  return knex.schema.table('info', (tbl) => {
      tbl.dropColumn('age')
  })
};

exports.down = function(knex) {
  return knex.schema.table('info', (tbl) => {
      tbl.integer('age').notNullable();
  })
};
