exports.seed = function(knex, Promise) {
  return knex('representatives').del()
  .then(() => {
    return Promise.all([
      knex('representatives').insert({
        'id': 11,
        'first_name': 'Bob',
        'last_name': 'Barker',
        'role_type': 'senator',
        'next_election': 2020,
        'party': 'R',
        // 'state_id': 1,
        'district': 4
      }),
      knex('representatives').insert({
        'id': 12,
        'first_name': 'Donald',
        'last_name': 'Drumpf',
        'role_type': 'senator',
        'next_election': 2020,
        'party': 'R',
        // 'state_id': 1,
        'district': 3

      }),
      knex('representatives').insert({
        'id': 13,
        'first_name': 'Ben',
        'last_name': 'Dover',
        'role_type': 'senator',
        'next_election': 2022,
        'party': 'D',
        // 'state_id': 2,
        'district': 2
      })
    ]);
  });
};
