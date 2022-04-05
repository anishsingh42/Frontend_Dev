//Remove and replace and add

const newHeading = document.createElement('h2');

//adding id to newHeading 
newHeading.id = 'task-title';

//append textNode
newHeading.appendChild(document.createTextNode('Task - Title'));

//fetch the old heading 
const oldHeading = document.getElementById('task-title');
//get the parent element
const cardAction = document.querySelector('.card-action');

//replace h5 with h2
cardAction.replaceChild(newHeading, oldHeading);

//remove element
const lis = document.querySelectorAll('li.collection-item');
const list = document.querySelector('ul.collection');

lis[0].remove();
list.removeChild(lis[2]);

//classes and attributes 

//classes 
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[1];
val = link.classList.add('test');
val = link.classList;
val = link.classList.remove('test');
val = link;
console.log(val);


//attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://www.youtube.com/');
val = link.hasAttribute('href');
console.log(val);

//console
console.log(newHeading);