const db = require('../../data/dbConfig');
const { add } = require('./user-model');
describe('auth model', function() {
    describe('add()', function() {
        beforeEach(async () => {
            await db('info').truncate();
        });
        it('this adds a users information', async function() {
            await add({ user_id: 4, gender: 'male', height: '45', weight: '150', activity_factor: '1', meals_per_day: '3', snacks_per_day: '47', goal_multiplier: '1', birthdate_day: 12, birthdate_month: 4, birthdate_year: 1995});
            const users = await db('info');
            expect(users).toHaveLength(1);
        });
        it('checks if every part of the user info was added', async function() {
            await add({ user_id: 4, gender: 'male', height: '45', weight: '150', activity_factor: '1', meals_per_day: '3', snacks_per_day: '47', goal_multiplier: '1', birthdate_day: 12, birthdate_month: 4, birthdate_year: 1995 });
            const info = await db("info");
            expect(info).toHaveLength(1);
            expect(info[0].user_id).toBe(4);
            expect(info[0].gender).toBe('male');
            expect(info[0].height).toBe(45);
            expect(info[0].weight).toBe(150);
            expect(info[0].activity_factor).toBe(1);
            expect(info[0].meals_per_day).toBe(3);
            expect(info[0].snacks_per_day).toBe(47);
            expect(info[0].goal_multiplier).toBe(1);
            expect(info[0].birthdate_day).toBe(12);
            expect(info[0].birthdate_month).toBe(4);
            expect(info[0].birthdate_year).toBe(1995);
        });
    })
})