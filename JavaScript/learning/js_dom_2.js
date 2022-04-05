//traversing DOM

//parentNode
let innerContainer = document.querySelector('#inner-container');
console.log('Inner Container"s parent node  ',innerContainer.parentNode);
innerContainer.parentNode.style.backgroundColor = '#ccc';
innerContainer.parentNode.style.border = '1px solid black';
innerContainer.parentNode.style.padding = '20px 0px 20px 10px';
innerContainer.parentNode.style.margin = '10px 0px';
innerContainer.parentNode.parentNode.parentNode.style.backgroundColor = '#f4f4f4'; // body is being returned
console.log(innerContainer.parentNode.parentNode);

//same with parentElement .. just replace every thing with parentElement instead of parentNode you will get the exact same thing 




//childNode
console.log('Inner Containers Child: ', innerContainer.childNodes); // childNodes will also add lineBreaks and all inform of text to the listItems

//instead prefer using children
console.log('Inner Containers Children: ', innerContainer.children);

//firstElementChild
console.log('Inner Containers First Element Child: ', innerContainer.firstElementChild);

//lastElementChild
console.log('Inner Containers First Element Child: ', innerContainer.lastElementChild);


//nextSibling // same as childNodes will consider lineBreaks and spaces 
let firstPara = document.querySelector('#first');
console.log("First Para Next sibling   ", firstPara.nextSibling)

//nextElementSibling
console.log("First Para Next sibling   ", firstPara.nextElementSibling)


//previousSibling
let secondPara = document.querySelector('#second');
console.log('Second Para Previous Sibling ',secondPara.previousSibling);


//previousElementSibling
console.log('Second Para Previous Sibling ',secondPara.previousElementSibling);


//create DOM

//createElement   //create Div
let newDiv = document.createElement('div');
newDiv.className = 'newDiv';
newDiv.id = 'newDivID'
newDiv.setAttribute('title' , 'HelloTitle');
console.log('Created New Div With createElement ',newDiv);
//create a textContent newDivText
let newDivText = document.createTextNode('Div New Text');

//now append newDivText to newDiv
newDiv.appendChild(newDivText);


// //now append this to the DOM
// var containerAfterHeader = document.querySelector('header .container-inside-header');

// var beforeElement = document.querySelector('header #before-element');
// containerAfterHeader.insertBefore(newDiv , beforeElement);

