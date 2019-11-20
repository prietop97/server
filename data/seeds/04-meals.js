
exports.seed = function(knex) {
  return knex('meals').insert([
    {daily_meals_id: 1, type: 'meals', meal_name: 'meal 1', protein: 35, fats: 20, carbohydrates: 40},
    {daily_meals_id: 1, type: 'meals', meal_name: 'meal 2', protein: 35, fats: 20, carbohydrates: 40},
    {daily_meals_id: 1, type: 'meals', meal_name: 'meal 3', protein: 35, fats: 20, carbohydrates: 40},

    {daily_meals_id: 9, type: 'meals', meal_name: 'meal 1', protein: 20, fats: 15, carbohydrates: 35},
    {daily_meals_id: 9, type: 'meals', meal_name: 'meal 2', protein: 20, fats: 15, carbohydrates: 35},
    {daily_meals_id: 9, type: 'meals', meal_name: 'meal 3', protein: 20, fats: 15, carbohydrates: 35},
    {daily_meals_id: 9, type: 'snacks', meal_name: 'snack 1', protein: 5, fats: 8, carbohydrates: 10},
    {daily_meals_id: 9, type: 'snacks', meal_name: 'snack 2', protein: 5, fats: 8, carbohydrates: 10},

    {daily_meals_id: 17, type: 'meals', meal_name: 'meal 1', protein: 30, fats: 15, carbohydrates: 30},
    {daily_meals_id: 17, type: 'meals', meal_name: 'meal 2', protein: 30, fats: 15, carbohydrates: 30},
    {daily_meals_id: 17, type: 'meals', meal_name: 'meal 3', protein: 30, fats: 15, carbohydrates: 30},
    {daily_meals_id: 17, type: 'meals', meal_name: 'meal 4', protein: 30, fats: 15, carbohydrates: 30}
  ])
   
};
