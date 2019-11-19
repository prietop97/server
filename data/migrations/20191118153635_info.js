
exports.up = function(knex) {
    return knex.schema
      .createTable('info', tbl => {
          tbl.increments();
  
          tbl 
              .integer('user_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('users')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl
              .string('first_name', 128)
              .notNullable();
          tbl
              .string('last_name', 128);
          tbl
              .string('gender', 128)
              .notNullable();
          tbl
              .integer('age')
              .notNullable();
          tbl
              .float('height')
              .notNullable();
          tbl
              .float('weight')
              .notNullable();
          tbl
              .float('activity_factor', 128)
              .notNullable();
          tbl
              .integer('meals_per_day')
              .notNullable();
          tbl
              .integer('snacks_per_day')
              .notNullable();
          tbl 
              .float('goal_multiplier')
              .notNullable();
  
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('info')
  };

