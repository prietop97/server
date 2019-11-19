
exports.up = function(knex) {
    return knex.schema
      .createTable('meals', tbl => {
        tbl.increments();
  
        tbl
              .integer('daily_meals_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('daily_meals')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
        tbl
              .enu('type', ['meals', 'snacks'])
              .notNullable();
        tbl
              .string('meal_name', 128)
              .notNullable();
        tbl
              .integer('protein')
              .notNullable();
        tbl
              .integer('fats')
              .notNullable();
        tbl
              .integer('carbohydrates')
              .notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('meals')
  };
