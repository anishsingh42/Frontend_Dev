//DOM Selectors for multiple elements 

//document.getElementsByClassName
/* 
    *NOTE: getElementsByClassName returns a HTML Collection and not an array list 
    *NOTE: getElementsByClassName works on a global scope . To return only li items use querySelector    
*/
/*
let listItem = document.getElementsByClassName('collection-item');
console.log(listItem);
console.log(listItem[0]);
listItem[2].style.background = '#f4f4f4';

let liItem = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(liItem);
*/

//document.getElementsByTagName
let tagName = document.getElementsByTagName('li');
console.log(tagName);


/**
 * NOTE: Cant perform array related methods and operation on HTML Collection . In-order to perform array related operation we need to first convert HTML collection into array and then proceed accordingly
 */

tagName = Array.from(tagName);
tagName.reverse();
tagName.forEach(function(li, index){
    console.log(li);
    li.textContent = `${index}: Hello`;
});


//document.querySelectorAll()
let itemsLi = document.querySelectorAll('li.collection-item');
console.log(itemsLi);

/**
 * NOTE: using queryselectorAll returns a node list which is different from HTML collection therefore it can use some properties of array without converting them like in HTML collection
 * 
 */
let liOdd = document.querySelectorAll('li.collection-item:nth-child(odd)');
liOdd.forEach(function(li, index){
    li.style.background = '#ccc';
})

let liEven = document.querySelectorAll('li.collection-item:nth-child(even)');
liEven.forEach(function(li, index){
    li.style.background = '#f4f4f4';
})