
exports.seed = function(knex) {
  return knex('daily_meals').insert([
    {info_id: 1, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'monday'},
    {info_id: 1, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'tuesday'},
    {info_id: 1, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'wednesday'},
    {info_id: 1, meals_per_day: 4, snacks_per_day: 0, day_of_week: 'thursday'},
    {info_id: 1, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'friday'},
    {info_id: 1, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'saturday'},
    {info_id: 1, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'sunday'},

    {info_id: 2, meals_per_day: 4, snacks_per_day: 0, day_of_week: 'monday'},
    {info_id: 2, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'tuesday'},
    {info_id: 2, meals_per_day: 4, snacks_per_day: 0, day_of_week: 'wednesday'},
    {info_id: 2, meals_per_day: 4, snacks_per_day: 0, day_of_week: 'thursday'},
    {info_id: 2, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'friday'},
    {info_id: 2, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'saturday'},
    {info_id: 2, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'sunday'},

    {info_id: 3, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'monday'},
    {info_id: 3, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'tuesday'},
    {info_id: 3, meals_per_day: 4, snacks_per_day: 0, day_of_week: 'wednesday'},
    {info_id: 3, meals_per_day: 4, snacks_per_day: 0, day_of_week: 'thursday'},
    {info_id: 3, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'friday'},
    {info_id: 3, meals_per_day: 3, snacks_per_day: 0, day_of_week: 'saturday'},
    {info_id: 3, meals_per_day: 3, snacks_per_day: 2, day_of_week: 'sunday'},

  ])
   
};
