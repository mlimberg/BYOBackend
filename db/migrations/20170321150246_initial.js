
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
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('senators'),
          knex.schema.dropTable('representatives')
      ])
};
