module.exports =  {
    validateDailyMeals,
    stringifyMeals,
    addInfoIdToMeals
}

function validateDailyMeals(req, res, next) {

    req.body.forEach(dailymeals => {
        let {  meals_per_day, snacks_per_day, day_of_week }  = dailymeals;
        if( !(meals_per_day >= 0) || !(snacks_per_day >= 0) || !day_of_week) {
            res.status(400).json({ error: 'Please provide the proper request body'})
            
        } 
    });
    next();
}

function stringifyMeals(req, res, next) {
    req.body = req.body.map(dailymeals => {
        dailymeals.meals = JSON.stringify(dailymeals.meals)
        return dailymeals
    })
    next();
}

function addInfoIdToMeals(req, res, next) {
    req.body = req.body.map(dailymeals => {
        dailymeals.info_id = req.params.id
        return dailymeals
    })
    next();
}