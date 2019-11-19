const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
    .then(saved => {
      const token = getJwtToken(saved);
      res.status(201).json({ username: saved.username, token});
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          // produce a token
          const token = getJwtToken(user);
  
          //send the token to the client
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  function getJwtToken(user) {
    console.log('getJWtToken',user)
    const payload = {
      user
    };
  
    const secret = process.env.JWT_SECRET || "is it secret";
  
    const options = {
      expiresIn: '8hr'
    }
  
    return jwt.sign(payload, secret, options);
  }

  module.exports = router;