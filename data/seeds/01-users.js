
const bcrypt = require('bcryptjs');
const password = 'password';

exports.seed = function(knex) {
  return knex('users').insert([
    {id: 1, fullname: 'dominique maack', username: 'dominique', password: bcrypt.hashSync(password)},
    {id: 2, fullname: 'hector martinez', username: 'hector', password: bcrypt.hashSync(password)},
    {id: 3, fullname: 'tom test', username: 'tom', password: bcrypt.hashSync(password)}
  ])
   
};
