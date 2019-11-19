const bcrypt = require('bcryptjs');
const password = 'password';

exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, username: 'dominique', password: bcrypt.hashSync(password)},
    {id: 2, username: 'hector', password: bcrypt.hashSync(password)},
    {id: 3, username: 'tom', password: bcrypt.hashSync(password)}
  ])
   
};
