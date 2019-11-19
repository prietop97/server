const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const infoRouter = require('../api/users/user-router');
const authRouter = require('../api/auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter)

server.use('/info', infoRouter);

server.get('/', (req, res) => {
    res.send('Server is working')
})


module.exports = server;