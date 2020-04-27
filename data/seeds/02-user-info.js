
exports.seed = function(knex) {
  return knex('info').insert([
    {user_id: 1, start: '2020-02-02 20:20:00', end: '2020-02-02 22:20:007', mood: 'great'},
    {user_id: 2, start: '2020-02-02 20:20:00e', end: '2020-02-02 22:20:00', mood: 'good'},
    {user_id: 3, start: '2020-02-02 20:20:00', end: '72020-02-02 22:20:00', mood: 'bad'}
  ])
   
};
