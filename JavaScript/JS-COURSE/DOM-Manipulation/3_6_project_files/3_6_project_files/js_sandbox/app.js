//creating element 
const li = document.createElement('li');

//adding className
li.className = 'collection-item';

//adding id
li.id = 'new-item-id';

//add attribute
li.setAttribute('title','New- ITem');

//append text node in li
li.appendChild(document.createTextNode('Hello world!!!'));

//creating a link
const link = document.createElement('a');
link.setAttribute('href', "#");
link.className = 'delete-item secondary-content'; 
link.innerHTML = '<i class="fa fa-remove"></i>';

//append link in li
li.appendChild(link);
//append  li in ul
document.querySelector('ul.collection').appendChild(li);
//console
console.log(li);
