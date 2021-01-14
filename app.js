const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('client'));
app.use(express.json()); //Parse JSON-encoded bodies




let rawdata1 = fs.readFileSync('./books.json');
let library = JSON.parse(rawdata1);

let rawdata2 = fs.readFileSync('./people.json');
let people = JSON.parse(rawdata2);

app.get('/books/list', function(req, resp){
  resp.json(library);
});

app.get('/people/list', function(req, resp){
    resp.json(people);
});

app.post('/books/add', function(req, resp){
  const newbook = req.body.newbook;
  const newauthor = req.body.newauthor;
  const newreview = req.body.newreview;
  let obj= { title: newbook,
        author: newauthor,
        review: newreview};
  library.books.push(obj);
  fs.writeFile('./books.json',JSON.stringify(library, null, 2), err =>{
      if(err){
          console.log(err);
      }
  });
  //list.push(newbook);
  resp.json(library);
});

app.get('/books/search', function(req, resp){
    resp.json(library);
});

module.exports = app;