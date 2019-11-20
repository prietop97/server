
exports.up = function(knex) {
    return knex.schema.table('daily_meals', tbl => {
      tbl.json('meals')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('daily_meals', function(tbl) {
        tbl.dropColumn('meals')
    })
  };
