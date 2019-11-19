require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`\n ** Listening on port ${PORT} ** \n`)
})