
window.addEventListener('load', async function (event) {
  const response = await fetch('http://127.0.0.1:8090/people/list');
  const body = await response.json();
  renderPeople(body);
});

function renderPeople (people) {
  const container = document.getElementById('people');
    container.innerHTML = '';
    const item = document.createElement('table');
    container.appendChild(item);
    let cnt = 0;
    for (const person of people.people) {
      if (cnt % 6 === 0) {
        const item = document.createElement('tr');
        container.appendChild(item);
      }
      const item = document.createElement('td');
      item.innerHTML = person.fname + ' ' + person.lname + '&nbsp&nbsp&nbsp&nbsp';
      container.appendChild(item);
      cnt++;
    }
}

async function showBooks () {
  const response = await fetch('http://127.0.0.1:8090/books/list');
  const body = await response.json();
  renderBooks(body);
};

const login = document.getElementById('LogInSubmit');
login.addEventListener('click', async function (event) {
  event.preventDefault();

  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;

  const parameters = { fname: fname, lname: lname };
  const response = await fetch('http://127.0.0.1:8090/people/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(parameters)
  });

  const people = await response.json();
  renderPeople(people);
  if (fname !== '') {
  for (const person of people.people) {
 if (person.fname === fname && person.cnt > 0) {
   document.getElementById('showbooks').innerHTML = '<button type="button" class="btn btn-primary" align="center" id="buttonShowBooks" onclick=showBooks()>Show books</button>';
  }
}
  document.getElementById('yourbooks').innerHTML = '';
  document.getElementById('LogInSubmit').disabled = true;
  document.getElementById('submit_thing').disabled = false;
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('title').innerHTML = fname + "'s Reading Tracker";
  }
});

function renderBooks (library) {
    const container = document.getElementById('yourbooks');
    container.innerHTML = '<h4>Your books:</h4>';
    for (const book of library.books) {
      if (library.userfname === book.userfname) {
          const item = document.createElement('div');
          item.innerHTML = book.title + '<br>';
          container.appendChild(item);
}
    }
};

document.getElementById('submit_searchbooks').addEventListener('click', async function (event) {
  event.preventDefault();
  const searchtitle = document.getElementById('searchtitle').value;
  const response = await fetch('http://127.0.0.1:8090/books/search');
  const body = await response.json();
  searchBooks(body, searchtitle);
  document.getElementById('searchtitle').value = '';
});

function searchBooks (library, searchtitle) {
  const container = document.getElementById('searchresult');
  container.innerHTML = '<h4>Search results:</h4>';
  let ok = 0;
  for (const book of library.books) {
    if (book.title === searchtitle) {
        ok = 1;
        const item = document.createElement('div');
        item.innerHTML = 'Reviewed by:' + book.userfname + ' ' + book.userlname + '<br>' +
                        'Review:' + book.review + '<br><br>';
        container.appendChild(item);
}
    }
    if (ok === 0) {
          const item = document.createElement('div');
          item.innerHTML = 'No item has matched your search';
          container.appendChild(item);
    }
};

document.getElementById('submit_searchpeople').addEventListener('click', async function (event) {
  event.preventDefault();
  const searchname = document.getElementById('searchname').value;
  const response = await fetch('http://127.0.0.1:8090/people/search');
  const body = await response.json();
  searchPeople(body, searchname);
  document.getElementById('searchname').value = '';
});

function searchPeople (people, searchname) {
  const container = document.getElementById('searchresult');
  container.innerHTML = '<h4>Search results:</h4>';
  let ok = 0;
  for (const person of people.people) {
    if (person.fname + ' ' + person.lname === searchname) {
      ok = 1;
      const item = document.createElement('div');
      item.innerHTML = 'No. of books:' + person.cnt + '<br>';
      container.appendChild(item);
}
  }
  if (ok === 0) {
      const item = document.createElement('div');
      item.innerHTML = 'No item has matched your search';
      container.appendChild(item);
  }
};

const submit = document.getElementById('submit_thing');
submit.addEventListener('click', async function (event) {
  event.preventDefault();

  const newbook = document.getElementById('newbook').value;
  const newauthor = document.getElementById('newauthor').value;
  const newreview = document.getElementById('newreview').value;

  const parameters = { newbook: newbook, newauthor: newauthor, newreview: newreview };
  const response = await fetch('http://127.0.0.1:8090/books/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(parameters)
  });

  const body = await response.json();
  renderBooks(body);
  document.getElementById('newbook').value = '';
  document.getElementById('newauthor').value = '';
  document.getElementById('newreview').value = '';
});

document.getElementById('buttonMainPage').addEventListener('click', function (event) {
  document.getElementById('yourbooks').innerHTML = '<p style="font-size: 120%">Welcome to the Personalised Reading Tracker. Create your account' +
  " and track your reading progress. Review books and see others' opinions of the books you have read or might want to read. Look" +
  ' up your friends to see what they have been reading.</p>';
  document.getElementById('showbooks').innerHTML = '';
  document.getElementById('homePage').innerHTML = '';
  document.getElementById('submit_thing').disabled = true;
  document.getElementById('LogInSubmit').disabled = false;
  document.getElementById('searchresult').innerHTML = '';
  document.getElementById('title').innerHTML = 'Personalised Reading Tracker';
});
