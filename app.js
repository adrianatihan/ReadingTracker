const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('client'));
app.use(express.json()); //Parse JSON-encoded bodies


let rawdata1 = fs.readFileSync('./books.json');
let library = JSON.parse(rawdata1);

let rawdata2 = fs.readFileSync('./people.json');
let people = JSON.parse(rawdata2);



app.get('/people/list', function(req, resp){
    resp.json(people);
});



app.post('/people/add', function(req, resp){
    const fname = req.body.fname;
    const lname = req.body.lname;

    let obj= { fname: fname,
          lname: lname};
    library.users.pop();
    library.users.push(obj);

    let flag=0;
    for(let person of people.people)
        if(person.fname==obj.fname)
            if(person.lname==obj.lname)
                flag=1;
    if(flag==0 && obj.fname!='' && obj.lname!='')
    {
        people.people.push(obj);
        fs.writeFile('./people.json',JSON.stringify(people, null, 2), err =>{
           if(err){
            console.log(err);
            }
    });}
    resp.json(people);
  });

app.get('/people/search', function(req, resp){
    resp.json(people);
});

app.get('/books/list', function(req, resp){
  resp.json(library);
});

app.get('/books/search', function(req, resp){
    resp.json(library);
});

app.post('/books/add', function(req, resp){
  const newbook = req.body.newbook;
  const newauthor = req.body.newauthor;
  const newreview = req.body.newreview;

  let obj= { title: newbook,
        author: newauthor,
        review: newreview,
        userfname: library.users[0].fname, 
        userlname: library.users[0].lname};
  library.books.push(obj);
  for(let person of people.people){
      if(person.fname==obj.userfname){
          person.cnt+=1;
      }
  }
  fs.writeFile('./books.json',JSON.stringify(library, null, 2), err =>{
      if(err){
          console.log(err);
      }
  });
  fs.writeFile('./people.json',JSON.stringify(people, null, 2), err =>{
    if(err){
        console.log(err);
    }
});
  resp.json(library);
});


module.exports = app;