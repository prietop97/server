const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "fullname", "username");
}

function findBy(filter) {
  console.log(filter);
  return db("users")
    .where(filter)
    .select("id", "fullname", "username", "password");
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function findById(id) {
  return db("users").where({ id }).first();
}
