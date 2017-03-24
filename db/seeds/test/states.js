exports.seed = function(knex, Promise) {
  return knex('states').del()
  .then(() => {
    return Promise.all([
      knex('states').insert({
        'id': 11,
        'state': 'MN',
        'num_of_reps': 0,
        'num_of_sens': 0
      }),
      knex('states').insert({
        'id': 12,
        'state': 'CO',
        'num_of_reps': 0,
        'num_of_sens': 0

      }),
      knex('states').insert({
        'id': 13,
        'state': 'WI',
        'num_of_reps': 0,
        'num_of_sens': 0
      })
    ]);
  });
};
