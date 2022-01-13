console.log("Domain ",document.domain);
console.log("URL ",document.URL);
console.log("head ",document.head);
console.log("title ",document.title);
console.log("body",document.body);
console.log("All : (Not Recommended)",document.all);//all is deprecated or suppressed to avoid using this method
// document.all[9].innerHTML = "Manipulated node at index 7 by using all property of document ... forbidden method don't use it."
console.log(document.forms);
console.log(document.links);

//selectors
console.log('Fetched the h3 text with id h3_txt',document.getElementById('h5-txt'));
let h5Txt = document.getElementById('h5-txt');
console.log("Text Content ... doesnt pays attentiotn to the style done...   ",h5Txt.textContent);
console.log("Inner Text payes attention to the style done    ", h5Txt.innerText);

h5Txt.innerHTML = '<span>This would be nested inside h5</span>'
console.log(h5Txt);

/*
let headerElement = document.getElementsByTagName('header');
console.log(headerElement);
headerElement.style.borderBottom = '3px solid black'

Not able to use this !!! Dont know why
*/

//Get elements by class name
let emptyText = document.getElementsByClassName('empty-text');
console.log('Get elements by class name ', emptyText);
emptyText[1].style.color = 'red';
let sizeEmptyText = emptyText.length;
//selecting all and applying some effects wont work
//to make it work we will have to apply a loop and add it to each and every element

for(let i=0;i<sizeEmptyText;i++)
{
    emptyText[i].style.backgroundColor = 'aquamarine';
}

//The above same thing can be done using document.getElementByTagName();

//query selector
//with querySelector() remember that if multiple nodes are having same id or class name it will select the first occurring one
let headerElement = document.querySelector('#main-header');
headerElement.style.borderBottom = 'dashed 5px red';
let attemptToSelectMultiple = document.querySelector('.empty-text');
console.log(attemptToSelectMultiple);
attemptToSelectMultiple.style.color = '#6a5acd';

let selectAllPara = document.querySelector('.select-all');
selectAllPara.style.color = 'darkblue';

// let selectAllParaLast = document.querySelector('.select-all:last-child');
// selectAllParaLast.style.color = 'blue';

// let selectAllParaSec = document.querySelector('.select-all:nth-child(2)');
// selectAllParaSec.style.color='hotpink';

//querySelectorAll()
let allSelect = document.querySelectorAll('.select-all');
console.log(allSelect);
allSelect[0].style.border = '3px solid teal';
allSelect[0].style.padding = '20px 0px 20px 10px';
allSelect[1].style.borderBottom = '2.5px dashed red';
allSelect[2].style.border = '3px solid black';
allSelect[2].style.padding = '20px 0px 20px 10px';
allSelect[3].style.borderBottom = '2.5px dashed black';

let nthSelectOdd = document.querySelectorAll('.select-all:nth-child(odd)');
console.log(nthSelectOdd);

for(let j=0;j<nthSelectOdd.length;j++)
{
    nthSelectOdd[j].style.backgroundColor = '#ccc';
}

let nthSelectEven = document.querySelectorAll('.select-all:nth-child(even)');
console.log(nthSelectEven);
// nthSelectEven[0].style.padding = '20px 0xp 20px 10px';
for(let k=0;k<nthSelectEven.length;k++)
{
    nthSelectEven[k].style.padding = '20px 0xp 20px 10px';
    nthSelectEven[k].style.backgroundColor = '#d7816a';
}

