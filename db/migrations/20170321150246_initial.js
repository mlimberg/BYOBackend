
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('senators', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('role_type');
      table.integer('next_election');
      table.string('party');
      table.timestamps(true, true);
      table.integer('state_id')
           .references('id')
           .inTable('states')
    }),

    knex.schema.createTable('representatives', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('role_type');
      table.integer('next_election');
      table.string('party');
      table.integer('district');
      table.timestamps(true, true);
      table.integer('state_id')
           .references('id')
           .inTable('states')
    }),

    knex.schema.createTable('states', (table) => {
      table.increments('id').primary();
      table.string('state');
      table.integer('num_of_reps');
      table.integer('num_of_sens')
      table.timestamps(true, true);
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
