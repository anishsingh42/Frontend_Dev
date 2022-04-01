//DOM Selectors for single elements 

//document.getElementById()

console.log(document.getElementById('task-title'));

//Get the things after getting the elements 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//Change Styling using JS
const taskTitle = document.getElementById('task-title');

taskTitle.style.color = 'purple';
taskTitle.style.background = 'turquoise';
taskTitle.style.padding = '10px';
// taskTitle.style.display = 'none';


//Change Content within using JS
taskTitle.innerText = 'My Task';
taskTitle.textContent = 'Hello Task';
taskTitle.innerHTML = '<span style = "color: black">Hello World inside span</span>'


// Single Element Selector a.k.a querySelector 

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.test-class-name'));

console.log(document.querySelector('h5'));

document.querySelector('h5').style.color = 'red';
document.querySelector('li').style.color = 'blue';
document.querySelector('ul li').style.background = '#ccc';

document.querySelector('li:last-child').style.background = '#fcf';


document.querySelector('li:nth-child(3)').style.background = 'turquoise';
document.querySelector('li:nth-child(4)').style.color = 'orange';
document.querySelector('li:nth-child(odd)').style.background = 'purple';


