// const jwt = require('jsonwebtoken');
// const secret = require('../../config/secrets');

// module.exports = user => {
//     const payload = {
//         subject: user.id,
//         username: user.username,
//     }
//     const options = {
//         expires: '2hr'
//     }

//     return jwt.sign(payload, secret.jwtSecret, options);
// };