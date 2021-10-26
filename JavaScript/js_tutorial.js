//Printing hello world 

//getting output using console.log
console.log("Hello World!!!");

//using alert box
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
    console.log('Result: '+result);
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
console.log("Len: "+str_string.length);
//find the index of the characters ... returns the starting index of the character when found
console.log("Index of scr: "+str_string.indexOf("scr"));
//can perform slicing .slice(start,end)
console.log("Slice from 4 to 11:"+str_string.slice(4,11));
//can replace a particular string 
console.log("Replaced java with text: "+str_string.replace("java" , "text"));
//uppercase and lowercase
console.log("Upper case: "+str_string.toUpperCase());
console.log("Lower case: "+str_string.toLowerCase());
//concatenate strings
str = " is interesting";
console.log(str_string.concat(str));
//fetch a character in a string
console.log("Char at position 3: "+str_string.charAt(2));
console.log("Char at position 5: "+str_string[4]);
//split a string 
console.log("Split a string: "+str_string.split(''));



