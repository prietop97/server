const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    findByUserID,
    update,
    remove,
};

function add(info) {
    return db('info')
    .insert(info, 'id')
    .then(id => {
        return findById(id[0])
    })
}

function find() {
    return db('info')
}

function findById(id) {
    return db('info')
    .select('id', 'user_id', 'birthdate_day', 'birthdate_month', 'birthdate_year', 'gender', 'height', 'weight', 'activity_factor', 'meals_per_day', 'snacks_per_day', 'goal_multiplier')
    .where({ id })
    .first();
}

function findByUserID(user_id) {
    return db('info')
    .select('id', 'user_id', 'birthdate_day', 'birthdate_month', 'birthdate_year', 'gender','height', 'weight', 'activity_factor', 'meals_per_day', 'snacks_per_day', 'goal_multiplier')
    .where({ user_id })
    .first();
}


function update(id, changes) {
    return db('info')
        .where({ id })
        .update(changes)
        .then(res => {
            return findById(id)
        })
}

function remove(id) {
    return db('info')
    .where({ id })
    .del();
}