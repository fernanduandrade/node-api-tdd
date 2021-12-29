const request = require('supertest');

describe('rodando aplicação em express', () => {
    var server;

    beforeEach(function() {
        server = require('../app')
    })
    afterEach(function() {
        server.close()
    })


    it('batendo na rota do hellow world', function testeHelloWorld(done) {
        request(server).get('/hello').expect(200, done)
    })
    it('retornar 404', function teste404(done) {
        request(server).get('/aaaaaaaa').expect(404, done)
    })
})