
exports.seed = function(knex) {
  return knex('info').insert([
    {info_id: 1, meals_per_day: 'female', snacks_per_day: '67', day_of_week: '140'},
    {info_id: 2, gender: 'male', height: '67', weight: '140', activity_factor: '1', meals_per_day: 3, snacks_per_day: 2, goal_multiplier: '1', birthdate_day: 16, birthdate_month: 1, birthdate_year: 1999},
    {info_id: 3, gender: 'male', height: '74', weight: '165', activity_factor: '1', meals_per_day: 4, snacks_per_day: 0, goal_multiplier: '1', birthdate_day: 21, birthdate_month: 5, birthdate_year: 1985}
  ])
   
};
