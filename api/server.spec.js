const request = require('supertest');

const server = require('./server');

describe("server", function() {
    describe("GET /", function() {
        it("should return 200", function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });

        it("should return 200", function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch('text/html');
            });
        });
    })
})