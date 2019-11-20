const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    findByInfoID,
    removeForInfoId

};

function add(daily_meals, info_id) {
    //removeForInfoId(daily_meals[0].info_id)
    return db('daily_meals')
    .insert(daily_meals)
    .then(inserted => {
       return findByInfoID(info_id)
    })
}

function find() {
    return db('daily_meals')
}

function findById(id) {
    return db('daily_meals')
    .where({ id })
    .first();
}

function findByInfoID(info_id) {
    return db('daily_meals')
    .where({ info_id })
}

function removeForInfoId(info_id) {
    return db('daily_meals')
    .where({ info_id })
    .del()
}
