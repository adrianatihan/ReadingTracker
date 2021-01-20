
window.addEventListener('load', async function(event){
  let response = await fetch('http://127.0.0.1:8090/people/list');
  let body = await response.json();
  renderPeople(body);
});

function renderPeople(people){
  let container = document.getElementById('people');
    container.innerHTML = "";
    let item = document.createElement('table');
    let cnt=0;
    for(let person of people.people){
      if(cnt%6==0)
      {let item = document.createElement('tr');
       container.appendChild(item);}
      let item = document.createElement('td');
      item.innerHTML= person.fname + ' ' + person.lname+ '&nbsp&nbsp&nbsp&nbsp';
      container.appendChild(item);
      cnt++;
    }
}


let login = document.getElementById('LogInSubmit');
login.addEventListener('click', async function(event){

  event.preventDefault();
  
  let fname=document.getElementById('fname').value;
  let lname=document.getElementById('lname').value;

  let parameters = {'fname': fname, 'lname': lname};
  let response = await fetch('http://127.0.0.1:8090/people/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(parameters)
  });

  let body = await response.json();
  renderPeople(body);
  if(fname!=''){
  document.getElementById('homePage').innerHTML='<button type="button" class="btn btn-primary" align="center" onclick=MainPage()>Back to main page</button>';
  document.getElementById('showbooks').innerHTML='<button type="button" class="btn btn-primary" align="center" onclick=showBooks()>Show books</button>';
  document.getElementById('yourbooks').innerHTML="";
  document.getElementById('submit_thing').disabled= false;
  }
});

async function showBooks(){
  let response = await fetch('http://127.0.0.1:8090/books/list');
  let body = await response.json();
  renderBooks(body);
}

function renderBooks(library){
    let container = document.getElementById('yourbooks');
    container.innerHTML = "<h4>Your books:</h4>";
    for(let book of library.books){
      if(library.users[library.users.length-1].fname==book.userfname){
          let item = document.createElement('div');
          item.innerHTML= book.title+'<br>';
          container.appendChild(item);}
    }
};

document.getElementById('submit_search').addEventListener('click', async function(event){
  event.preventDefault();
  let searchtitle = document.getElementById('searchtitle').value;
  let response = await fetch('http://127.0.0.1:8090/books/search');
  let body = await response.json();
  searchBooks(body,searchtitle);
});

function searchBooks(library, searchtitle){
  let container = document.getElementById('yourbooks');
  container.innerHTML = "<h4>Search results:</h4>";
  let ok=0;
  for(let book of library.books){
    if(book.title==searchtitle){
        ok=1;
        let item = document.createElement('div');
        item.innerHTML= 'Reviewed by:'+book.userfname+ ' '+ book.userlname+ '<br>'+
                        'Review:'+book.review+'<br><br>';
        container.appendChild(item);}
    if(book.userfname+ ' '+ book.userlname==searchtitle){
        ok=1;
        let item = document.createElement('div');
        item.innerHTML= 'Title:'+ book.title+'<br>'+
                        'Author:'+book.author+'<br>'+
                        'Review:'+book.review+'<br><br>';
        container.appendChild(item);}
    }
    if(ok==0){
          let item = document.createElement('div');
          item.innerHTML="No item has matched your search";
          container.appendChild(item);
    }
  
};

let submit = document.getElementById('submit_thing');
submit.addEventListener('click', async function(event){

  event.preventDefault();


  let newbook = document.getElementById('newbook').value;
  let newauthor = document.getElementById('newauthor').value;
  let newreview = document.getElementById('newreview').value;

  let parameters = {'newbook': newbook, 'newauthor': newauthor, 'newreview': newreview};
  let response = await fetch('http://127.0.0.1:8090/books/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(parameters)
  });

  let body = await response.json();
  renderBooks(body);
});

async function MainPage(){

  let response = await fetch('http://127.0.0.1:8090/mainpage');
  let body = await response.json();

  document.getElementById('yourbooks').innerHTML='<p style="font-size: 120%">Welcome to the Personalised Reading Tracker. Create your account'+
  " and track your reading progress. Review books and see others' opinions of the books you have read or might want to read. Look"+
  " up your friends to see what they have been reading.</p>'";
  document.getElementById('showbooks').innerHTML="";
  document.getElementById('homePage').innerHTML="";
  document.getElementById('submit_thing').disabled= true;
}