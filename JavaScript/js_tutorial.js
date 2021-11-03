//Printing hello world 

//getting output using console.log
console.log("Hello World!!!");

//using alert box
//alert box pops up everytime you reload the page by default although you can change it
// alert("Hello World from alert box");



//variables
var string_str = "Favorite Number : ";
var number_no = 42;
console.log(string_str);
console.log(number_no);

//grabbing elements by id
document.getElementById('h3_txt').innerHTML = 'This will show on web page and not on console.'

//taking input from user in form of prompt and store it in a variable and display it
// var r_id = prompt('What is you ID??');
// document.getElementById('r_id').innerHTML = r_id;


//numbers in js
var num = 10;
//increment 
num++;
console.log(num);
//decrement
num = 9;
num--
console.log(num);

//operators
//divide / multiple * and remainder %
/*
var n=10;
var n2=45;
console.log(n/2);
console.log(n2*2);
console.log(n2%7);
*/
//combinational operator += , -+, *=, /= same as cpp
/*
n+=22;
console.log(n);
*/

//Functions
/*
    1. Create Function
    2. Call Function
*/
//create a function 
function f1()
{
    document.getElementById('r_id').innerHTML = 'This is inside a function creation.';
}

//calling a function 
f1();


/* 
    Q) Take a function that takes you name and print a msg using ur name
*/

/*
function nameInput()
{
    var name = prompt("Enter your Name: ");
    document.getElementById('function_name').innerHTML = 'Hello ' + name + ', Hope you are doing great!!!';
}

nameInput();
*/

/* 
    Add two numbers using function and has parameters num1 and num2

*/

function add(num1,num2)
{
    var result = num1 + num2;
    console.log('Result: ',result);
}

add(23,12);


//Data types
//Number Data-types ; String ; Object ; boolean ; undefined ; null value ;etc
var number = 122; //number
var str = "Anish Singh"; //string
var obj = {first_key : "Value_1" , second_key : "Value_2"}; //object
var boolean_value = true; //bool
var array = [1,2,3,4,5,6];
let random; //undefined
let nothing = null; //null value


//Strings in JS and common methods
let str_string = 'javascript'
//1) Use escape characters 
str_string = "java\nscript";
//find the length of the string 
str_string = 'javascript'
console.log("Len: ",str_string.length);
//find the index of the characters ... returns the starting index of the character when found
console.log("Index of scr: ",str_string.indexOf("scr"));
//can perform slicing .slice(start,end)
console.log("Slice from 4 to 11:",str_string.slice(4,11));
//can replace a particular string 
console.log("Replaced java with text: ",str_string.replace("java" , "text"));
//uppercase and lowercase
console.log("Upper case: ",str_string.toUpperCase());
console.log("Lower case: ",str_string.toLowerCase());
//concatenate strings
str = " is interesting";
console.log(str_string.concat(str));
//fetch a character in a string
console.log("Char at position 3: ",str_string.charAt(2));
console.log("Char at position 5: ",str_string[4]);
//split a string 
console.log("Split a string: ",str_string.split(''));


//Arrays 
let arr_fruits = ['apple' , 'mango' , 'orange' , 'dragonfruit'];
let arr = new Array('apple' , 'mango' , 'orange' , 'dragonfruit');

console.log("Decalred using new Array: ",arr);
console.log("Decalred normally: ",arr_fruits);

//fetch values
console.log("3rd value: ",arr[2]);
//change the value
arr[2] = 'pear';
console.log("3rd value: ",arr[2]);
//get the size of array
console.log("Array length: ",arr.length);
//toString
console.log("To String: ",arr.toString());
//join with symbols
console.log("join : ",arr.join('-'));
//pop pops the last elements
console.log(arr.pop(),arr);
//push
console.log(arr.push('watermelon'),arr);
arr[arr.length]="strawberry";
console.log(arr);
//remove 1st element from list
console.log(arr.shift(),arr);
arr[0]='apple';
//add 1st to list
console.log(arr.unshift("kiwi"),arr);
//merge two array
let veg = ['brocolli','tomato','potato','chilli'];
let allArr = arr.concat(veg);
console.log("Two arrays merged together: ",allArr);
//reverse
console.log("Reverse: ",allArr.reverse());
//sort
console.log("Sorted alphabetically: ",arr.sort());
let arrNo = [2,4,1,99,23,12,86,23,76,34,845,6,57,34,23,45,845,34,124];
//ascending sort
console.log("Sorted array: ",arrNo.sort(function(a,b){return a-b}));
//descending sort
console.log("Sorted array: ",arrNo.sort(function(a,b){return b-a}));

//adding things to an array using for or while loop
let emptyArray = new Array();
for(let i=0;i<10;i++)
{
    emptyArray.push(i);
}
console.log("Array of 10 elements made form empty array by apending elements: ",emptyArray);


//Objects -- same as dictionaries in python

let student = {First:"John" , 
               Second:"Wick" ,
               Age:"22" ,
               Height:"6.0" ,
                studentInfo: function()
                {
                  return this.First+ ' '+ this.Second;  
                }};
console.log("Student Name: ",student.First,student.Second);
student.First = 'Neo';
console.log("Student Name After changing First: ",student.First,student.Second);
student.Age++;
console.log("Age Incremented ",student.Age);
console.log("Student Name using function: ",student.studentInfo());


//conditional statements --- if else
let age = 45;
if( (age>=18)){status = 'U r my audience'
console.log(status)}
else
{
    status = 'not my audience'
    console.log(status)
}

//switch statements --- same as cpp
