function booksList(){
    document.getElementById("title").innerHTML='GET /books/list';
    document.getElementById("description").innerHTML='Returns a list of books added by the user logged in.';
    document.getElementById("url").innerHTML='http://127.0.0.1:8090/books/list';
    document.getElementById("request").innerHTML='curl -X GET http://127.0.0.1:8090/books/list';
    document.getElementById("response").innerHTML='{<br>"books":[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"title": "The Great Gatsby",<br>&nbsp;&nbsp;&nbsp;&nbsp;"author": "F. Fitzgerald",<br>&nbsp;&nbsp;&nbsp;&nbsp;"review": "Nice", <br>&nbsp;&nbsp;&nbsp;&nbsp;"userfname": "Adriana",<br>&nbsp;&nbsp;&nbsp;&nbsp;"userlname": "Tihan"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>],<br>"users" : [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name",<br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById('table').innerHTML='<tr><td>Name</td><td>Type</td><td>Description</td></tr>'+
'<tr><td>books.title</td><td>string</td><td>The title of the book, as entered by user.</td></tr>'+
'<tr><td>books.author</td><td>string</td><td>The author of the book, as entered by user.</td></tr>'+
'<tr><td>books.review</td><td>string</td><td>The review the user gave of the book.</td></tr>'+
'<tr><td>books.userfname</td><td>string</td><td>First name of the user who added the book.</td></tr>'+
'<tr><td>books.userlname</td><td>string</td><td>Last name of the user who added the book.</td></tr>'+
'<tr><td>users.fname</td><td>string</td><td>First name of current user.</td></tr>'+
'<tr><td>users.lname</td><td>string</td><td>Last name of current user.</td></tr>';
}


function booksSearch(){
    document.getElementById("title").innerHTML='GET /books/search';
    document.getElementById("description").innerHTML='Returns details of book which corresponds to the title searched by the user.';
    document.getElementById("url").innerHTML='http://127.0.0.1:8090/books/search';
    document.getElementById("request").innerHTML=' curl -X GET http://127.0.0.1:8090/books/search';
    document.getElementById("response").innerHTML='{<br>"books":[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"title": "The Great Gatsby",<br>&nbsp;&nbsp;&nbsp;&nbsp;"author": "F. Fitzgerald",<br>&nbsp;&nbsp;&nbsp;&nbsp;"review": "Nice", <br>&nbsp;&nbsp;&nbsp;&nbsp;"userfname": "Adriana",<br>&nbsp;&nbsp;&nbsp;&nbsp;"userlname": "Tihan"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>],<br>"users" : [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name",<br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById('table').innerHTML='<tr><td>Name</td><td>Type</td><td>Description</td></tr>'+
'<tr><td>books.title</td><td>string</td><td>The title of the book, as entered by user.</td></tr>'+
'<tr><td>books.author</td><td>string</td><td>The author of the book, as entered by user.</td></tr>'+
'<tr><td>books.review</td><td>string</td><td>The review the user gave of the book.</td></tr>'+
'<tr><td>books.userfname</td><td>string</td><td>First name of the user who added the book.</td></tr>'+
'<tr><td>books.userlname</td><td>string</td><td>Last name of the user who added the book.</td></tr>'+
'<tr><td>users.fname</td><td>string</td><td>First name of current user.</td></tr>'+
'<tr><td>users.lname</td><td>string</td><td>Last name of current user.</td></tr>';
}

function booksAdd(){
    document.getElementById("title").innerHTML='POST /books/add';
    document.getElementById("description").innerHTML='Adds book to the library.';
    document.getElementById("url").innerHTML='http://127.0.0.1:8090/books/add';
    document.getElementById("request").innerHTML=' curl -X POST http://127.0.0.1:8090/books/add';
    document.getElementById("response").innerHTML='{<br>"books":[<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"title": "The Great Gatsby",<br>&nbsp;&nbsp;&nbsp;&nbsp;"author": "F. Fitzgerald",<br>&nbsp;&nbsp;&nbsp;&nbsp;"review": "Nice", <br>&nbsp;&nbsp;&nbsp;&nbsp;"userfname": "Adriana",<br>&nbsp;&nbsp;&nbsp;&nbsp;"userlname": "Tihan"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>],<br>"users" : [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name",<br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById('table').innerHTML='<tr><td>Name</td><td>Type</td><td>Description</td></tr>'+
'<tr><td>books.title</td><td>string</td><td>The title of the book, as entered by user.</td></tr>'+
'<tr><td>books.author</td><td>string</td><td>The author of the book, as entered by user.</td></tr>'+
'<tr><td>books.review</td><td>string</td><td>The review the user gave of the book.</td></tr>'+
'<tr><td>books.userfname</td><td>string</td><td>First name of the user who added the book.</td></tr>'+
'<tr><td>books.userlname</td><td>string</td><td>Last name of the user who added the book.</td></tr>'+
'<tr><td>users.fname</td><td>string</td><td>First name of current user.</td></tr>'+
'<tr><td>users.lname</td><td>string</td><td>Last name of current user.</td></tr>';
}

function peopleList(){
    document.getElementById("title").innerHTML='GET /people/list';
    document.getElementById("description").innerHTML='Lists the users of the website.';
    document.getElementById("url").innerHTML='http://127.0.0.1:8090/people/list';
    document.getElementById("request").innerHTML=' curl -X GET http://127.0.0.1:8090/people/list';
    document.getElementById("response").innerHTML='{<br>"people": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"cnt" : 1<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById("table").innerHTML='<tr>'+'<td> Name</td>'+ '<td> Type</td>'+ '<td> Description</td>'+ '</tr>'+
    '<tr>'+'<td> people.fname</td>'+ '<td> string</td>'+ '<td> First name of user</td>'+ '</tr>'+
    '<tr>'+'<td> people.lname</td>'+ '<td> string</td>'+ '<td> Last name of user</td>'+ '</tr>'+
    '<tr><td>users.cnt</td><td>integer</td><td>Number of books user has added.</td></tr>';
}

function peopleSearch(){
    document.getElementById("title").innerHTML='GET /people/search';
    document.getElementById("description").innerHTML='Returns books and reviews added by the user whose name was searched.';
    document.getElementById("url").innerHTML='http://127.0.0.1:8090/people/search';
    document.getElementById("request").innerHTML=' curl -X GET http://127.0.0.1:8090/people/search';
    document.getElementById("response").innerHTML='{<br>"people": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById('table').innerHTML='{<br>"people": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"cnt" : 1<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById("table").innerHTML='<tr>'+'<td> Name</td>'+ '<td> Type</td>'+ '<td> Description</td>'+ '</tr>'+
    '<tr>'+'<td> people.fname</td>'+ '<td> string</td>'+ '<td> First name of user</td>'+ '</tr>'+
    '<tr>'+'<td> people.lname</td>'+ '<td> string</td>'+ '<td> Last name of user</td>'+ '</tr>'+
    '<tr><td>users.cnt</td><td>integer</td><td>Number of books user has added.</td></tr>';
}

function peopleAdd(){
    document.getElementById("title").innerHTML='POST /people/add';
    document.getElementById("description").innerHTML='Adds new user.';
    document.getElementById("url").innerHTML='http://127.0.0.1:8090/people/add';
    document.getElementById("request").innerHTML=' curl -X POST http://127.0.0.1:8090/people/add';
    document.getElementById("response").innerHTML='{<br>"people": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;"fname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"lname" : "Name", <br>&nbsp;&nbsp;&nbsp;&nbsp;"cnt" : 1<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>]<br>}';
    document.getElementById("table").innerHTML='<tr>'+'<td> Name</td>'+ '<td> Type</td>'+ '<td> Description</td>'+ '</tr>'+
    '<tr>'+'<td> people.fname</td>'+ '<td> string</td>'+ '<td> First name of user</td>'+ '</tr>'+
    '<tr>'+'<td> people.lname</td>'+ '<td> string</td>'+ '<td> Last name of user</td>'+ '</tr>'+
    '<tr><td>users.cnt</td><td>integer</td><td>Number of books user has added.</td></tr>';
}



