process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
// eslint-disable-next-line no-unused-vars
let should = chai.should();
let expect = chai.expect;
chai.use(require('chai-match'));
chai.use(chaiHttp);

it('Test of index.js', function(done){
    chai.request(server)
        .get("/")
        .end(function(err, res){
            expect(res.body.msg).string;
            expect(res).status(200);
            done();
        });
});