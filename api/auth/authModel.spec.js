const db = require('../../data/dbConfig');

const { add } = require('./auth-model');

describe('auth model', function() {
    describe('add()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        });

        it('should add a user', async function() {
            await add({ username: 'Bob', password: 'password' });

            const users = await db('users');
            expect(users).toHaveLength(1);
        });
    })
})