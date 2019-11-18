const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../api/auth/auth-model');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter)

server.get('/', (req, res) => {
    res.send('Server is working')
})

server.use(auth);

module.exports = server;