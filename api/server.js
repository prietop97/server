const express = require('express');
const server = express();

const infoRouter = require('../api/users/user-router');

server.use(express.json());

server.use('/info', infoRouter);

server.get('/', (req, res) => {
    res.send('Server is working')
})

module.exports = server;