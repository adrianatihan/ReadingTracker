window.addEventListener('load', async function(event){
  let response = await fetch('http://127.0.0.1:8090/books/list');
  let body = await response.json();
  renderBooks(body);  
});

function renderBooks(library){
    let container = document.getElementById('books');
    container.innerHTML = "";
    for(let book of library.books){
      let item = document.createElement('div');
      item.innerHTML= book.title+'<br>';
    container.appendChild(item);
    }
}

let submit = document.getElementById('submit_thing');
submit.addEventListener('click', async function(event){
  event.preventDefault();
  let newbook = document.getElementById('newbook').value;
  let newauthor = document.getElementById('newauthor').value;
  let newreview = document.getElementById('newreview').value;
  /*let obj= { "title": newbook,
        "author": newauthor,
        "review": newreview};
  library.books.push(obj);*/
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
})

document.getElementById('submit_search').addEventListener('click', async function(event){
  event.preventDefault();
  let searchtitle = document.getElementById('searchtitle').value;
  let response = await fetch('http://127.0.0.1:8090/books/search');
  let body = await response.json();
  searchBooks(body,searchtitle);  
})

function searchBooks(library, searchtitle){
  let container = document.getElementById('body');
  container.innerHTML = "";
  for(let book of library.books){
    if(book.title==searchtitle){
        let item = document.createElement('div');
        item.innerHTML= 'Reviewed by:'+'<br>'+
                        'Review:'+book.review+'<br><hr>';
        container.appendChild(item);}
  }
}
