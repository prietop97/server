const db = require('../../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('user-update').select('user_id', 'username', 'password');
}

function findBy(filter) {
  return db('user-update').where(filter);
}

async function add(user) {
  const [id] = await db('user-update').insert(user);

  return findById(id);
}

function findById(id) {
  return db('user-update')
    .where({ id })
    .first();
}