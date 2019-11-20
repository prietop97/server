const db = require('../../data/dbConfig');

const { add } = require('./user-model');

describe('auth model', function() {
    describe('add()', function() {
        beforeEach(async () => {
            await db('info').truncate();
        });

        it('this adds a users information', async function() {
            await add({ user_id: 4, gender: 'male', height: '45', weight: '150', activity_factor: '1', meals_per_day: '3', snacks_per_day: '47', goal_multiplier: '1', birthdate_day: 12, birthdate_month: 4, birthdate_year: 1995  });

            const users = await db('info');
            expect(users).toHaveLength(1);
        });
    })
})