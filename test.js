const assert = require('chai').assert;
const request = require('supertest');
const app = require('../app');

describe('Express App', function() {
    it('responds with status code 200 for the home route', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});
