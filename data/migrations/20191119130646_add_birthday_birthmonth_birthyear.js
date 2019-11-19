
exports.up = function(knex) {
  return knex.schema.table('info', (tbl) => {
      tbl.integer('birthdate_day').notNullable().defaultTo(21);
      tbl.integer('birthdate_month').notNullable().defaultTo(05)
      tbl.integer('birthdate_year').notNullable().defaultTo(1985)
  })
};

exports.down = function(knex) {
  return knex.schema.table('info', (tbl) => {
      tbl.dropColumn('birthdate_day');
      tbl.dropColumn('birthdate_month');
      tbl.dropColumn('birthdate_year');
  })
};
