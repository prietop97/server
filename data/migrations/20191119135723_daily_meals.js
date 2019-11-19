
exports.up = function(knex) {
  return knex.schema
    .createTable('daily_meals', tbl => {
        tbl.increments();

        tbl
            .integer('info_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('info')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl
            .integer('meals_per_day')
            .notNullable();
        tbl
            .integer('snacks_per_day')
            .notNullable();
        tbl
            .string('day_of_week', 128)
            .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('daily_meals')
};
