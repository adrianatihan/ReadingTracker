const express = require('express');
const app = express();
//const fs = require('fs');
app.use(express.static('client'));
app.use(express.json()); //Parse JSON-encoded bodies

let books = ['The Great Gatsby',
'Harry Potter'];

//let rawdata = fs.readFileSync('books.json');
//let library = JSON.parse(rawdata);
let library={
    "books":[
        {
            "title": "The Great Gatsby",
            "author": "F. Fitzgerald",
            "review": "Nice"
        },
        {
            "title": "Harry Potter",
            "author": "J.K. Rowling",
            "review": "Good"
        }
    ]
}

app.get('/books/list', function(req, resp){
  resp.json(library);
});

app.post('/books/add', function(req, resp){
  const newbook = req.body.newbook;
  const newauthor = req.body.newauthor;
  const newreview = req.body.newreview;
  let obj= { "title": newbook,
        "author": newauthor,
        "review": newreview};
  library.books.push(obj);
  resp.json(library);
});

app.get('/books/search', function(req, resp){
    resp.json(library);
});

module.exports = app;