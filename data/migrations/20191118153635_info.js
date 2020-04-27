
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

            tbl.dateTime('start', { useTz : false, precision:0 } ).notNullable()

            tbl.dateTime('end', { useTz : false, precision:0 } ).notNullable()

            tbl
            .string('mood')
            .notNullable();

      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('info')
  };

