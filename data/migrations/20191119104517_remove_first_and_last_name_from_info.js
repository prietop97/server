
exports.up = function(knex) {
  return knex.schema.table('info', (tbl) => {
    tbl
        .dropColumn('first_name');
    tbl
        .dropColumn('last_name')
  })
};

exports.down = function(knex) {
    return knex.schema.table('info', (tbl) => {
        tbl.string('first_name', 128).notNullable();
        tbl.string('last_name', 128);
    })
};
