const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('client'));
app.use(express.json());

const rawdata1 = fs.readFileSync('./books.json');
const library = JSON.parse(rawdata1);

const rawdata2 = fs.readFileSync('./people.json');
const people = JSON.parse(rawdata2);

app.get('/people/list', function (req, resp) {
    resp.json(people);
});

app.post('/people/add', function (req, resp) {
    const fname = req.body.fname;
    const lname = req.body.lname;

    const obj = {
        fname: fname,
        lname: lname,
        cnt: 0
     };
    // library.users.pop();
    // library.users.push(obj);
    library.userfname = fname;
    library.userlname = lname;

    let flag = 0;
    for (const person of people.people) {
 if (person.fname === obj.fname) {
 if (person.lname === obj.lname) { flag = 1; }
}
}
    if (flag === 0 && obj.fname !== '' && obj.lname !== '') {
        people.people.push(obj);
        fs.writeFile('./people.json', JSON.stringify(people, null, 2), err => {
           if (err) {
            console.log(err);
            }
    });
    }
    resp.json(people);
  });

app.get('/people/search', function (req, resp) {
    resp.json(people);
});

app.get('/books/list', function (req, resp) {
  resp.json(library);
});

app.get('/books/search', function (req, resp) {
    resp.json(library);
});

app.post('/books/add', function (req, resp) {
  const newbook = req.body.newbook;
  const newauthor = req.body.newauthor;
  const newreview = req.body.newreview;

  const obj = {
    title: newbook,
    author: newauthor,
    review: newreview,
    userfname: library.userfname,
    userlname: library.userlname
 };
  library.books.push(obj);
  for (const person of people.people) {
      if (person.fname === obj.userfname) {
          person.cnt += 1;
      }
  }
  fs.writeFile('./books.json', JSON.stringify(library, null, 2), err => {
      if (err) {
          console.log(err);
      }
  });
  fs.writeFile('./people.json', JSON.stringify(people, null, 2), err => {
    if (err) {
        console.log(err);
    }
 });
  resp.json(library);
 });

module.exports = app;
