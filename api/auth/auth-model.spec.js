const db = require('../../data/dbConfig');
const { add } = require('./auth-model');
describe('auth model', function() {
    describe('add()', function() {
        beforeEach(async () => {
            await db('users').truncate();
        });
        it('this adds a user', async function() {
            await add({ username: 'Bob', password: 'password' });
            const users = await db('users');
            expect(users).toHaveLength(1);
        });
        it('should insert the provided user', async function() {
            await add({ username: 'Walter', password: 'password' });
            await add({ username: 'Saul', password: 'password' });
            const users = await db("users");
            expect(users).toHaveLength(2);
            expect(users[0].username).toBe('Walter');
            expect(users[1].username).toBe('Saul');
        });
    })
})