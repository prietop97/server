module.exports =  {
    validateDailyMeals
}

function validateDailyMeals(req, res, next) {

    req.body.forEach(dailymeals => {
        let { info_id, meals_per_day, snacks_per_day, day_of_week }  = dailymeals;
        if(!info_id || !(meals_per_day >= 0) || !(snacks_per_day >= 0) || !day_of_week) {
            res.status(400).json({ error: 'Please provide the proper request body'})
            
        } 
    });
    next();
}