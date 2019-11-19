
exports.seed = function(knex) {
  return knex('info').insert([
    {user_id: 1, first_name: 'dominique', last_name: 'maack', gender: 'female', age: 27, height: 70, weight: 135, activity_factor: 1.725, meals_per_day: 3, snacks_per_day: 0, goal_multiplier: 1 },
    {user_id: 2, first_name: 'hector', last_name: 'martinez', gender: 'male', age: 19, height: 70, weight: 135, activity_factor: 1.725, meals_per_day: 3, snacks_per_day: 2, goal_multiplier: 1.1 },
    {user_id: 3, first_name: 'tom', last_name: 'Doe', gender: 'male', age: 34, height: 74, weight: 165, activity_factor: 1.9, meals_per_day: 4, snacks_per_day: 0, goal_multiplier: 0.9 }
  ])
   
};