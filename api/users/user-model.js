const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    update,
    remove,
};

function add(info) {
    return db('user-info')
    .insert(info)
    .then(id => {
        return findById(id[0])
    })
}

function find() {
    return db('user-info')
}

function findById(id) {
    return db('user-info')
    .where({ id })
    .first();
}

function update(id, changes) {
    return db('user-info')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('user-info')
    .where({ id })
    .del();
}