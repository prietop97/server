const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    update,
    remove,
};

function add(info) {
    return db('info')
    .insert(info)
    .then(id => {
        return findById(id[0])
    })
}

function find() {
    return db('info')
}

function findById(id) {
    return db('info')
    .where({ id })
    .first();
}

function update(id, changes) {
    return db('info')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('info')
    .where({ id })
    .del();
}