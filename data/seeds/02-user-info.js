
exports.seed = function(knex) {
  return knex('info').insert([
    {user_id: 1, first_name: 'Jane', last_name: 'Doe', gender: 'female', age: 25, height: 67, weight: 135, activity_factor: 1.725, meals_per_day: 3, snacks_per_day: 0, goal_multiplier: 1 }
  ])
   
};
