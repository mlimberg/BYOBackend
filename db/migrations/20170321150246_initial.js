
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('senators', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('role_type')
      table.string('party');
      table.string('birthday');
      table.string('gender');
      table.string('state');
      table.string('start_date')
      table.string('end_date')
      table.timestamps();
      table.integer('state_id')
           .references('id')
           .inTable('states')
    }),

    knex.schema.createTable('representatives', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('role_type')
      table.string('party');
      table.string('birthday');
      table.string('gender');
      table.string('state');
      table.string('district');
      table.string('start_date')
      table.string('end_date')
      table.timestamps();
      table.integer('state_id')
           .references('id')
           .inTable('states')
    }),

    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('state');
      table.integer('num_of_reps');
      table.string('num_of_sens')
      table.timestamps();
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('senators'),
        knex.schema.dropTable('representatives'),
        knex.schema.dropTable('states')
      ])
};
