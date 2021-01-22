const request= require('supertest');
const app= require('./app');

describe('Test the things service', () => {
    test('GET /books/list succeeds', () => {
        return request(app)
	    .get('/books/list')
	    .expect(200);
    });

    test('GET /books/list returns JSON', () => {
        return request(app)
	    .get('/books/list')
	    .expect('Content-type', /json/);
    });

    test('GET /books/search succeeds', () => {
        return request(app)
	    .get('/books/search')
	    .expect(200);
    });

    test('GET /books/search returns JSON', () => {
        return request(app)
	    .get('/books/search')
	    .expect('Content-type', /json/);
    });
    

    test('POST /books/add succeeds', () => {
        const params = {'newbook': 'book', 'newauthor': 'author', 'newreview': 'review'};
        return request(app)
        .post('/books/add')
        .send(params)
	    .expect(200);
    });
    
    test('GET /people/list succeeds', () => {
        return request(app)
	    .get('/people/list')
	    .expect(200);
    });

    test('GET /people/list returns JSON', () => {
        return request(app)
	    .get('/people/list')
	    .expect('Content-type', /json/);
    });

    test('GET /people/search succeeds', () => {
        return request(app)
	    .get('/people/search')
	    .expect(200);
    });

    test('GET /people/search returns JSON', () => {
        return request(app)
	    .get('/people/search')
	    .expect('Content-type', /json/);
    });
    

    test('POST /people/add succeeds', () => {
        const params = {'fname': 'fname', 'lname': 'lname'};
        return request(app)
        .post('/people/add')
        .send(params)
	    .expect(200);
    });
});