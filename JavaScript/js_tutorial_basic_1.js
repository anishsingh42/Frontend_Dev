//Printing hello world 
//getting output using console.log
console.log("Hello World!!!");
//using alert box
// alert("Hello World from alert box");
//using confirm box
//let result  = confirm("Do you still want to delete this??");//boolean value
//using prompt box
// let age  = prompt("What is your age"); // will return null or undefined //null is pointing towards nothing whereas undefined is a un-initialized value
/*
    Difference between var and let and const 
    1. const once defined and declared can't be redefined .
        Eg : const PI = 3.14;
             PI = 22/7; //This will throw an error
    2. Var adn let are very much similar in terms of variable declaration and definition but yet different in multiple ways     
       a. If using Var there is no concept of global and local variable 
            var age = 20;
            eg: if(age == 20)
            {
                var iwant = "gamingsetup";
            }
            //compiler interpretation 
            var age = 20;             
            var iwant;
            console.log(iwant); //--> output will be undefined           
            if(age == 20)
            {
                iwant="gamingsetup";
            }       
        For keyword var everything is in function scope.  
        If we want the concept of global and local variable we use keyword let. For keyword let it defines block scope as well.
        block scope means it is  in function scope as well 
        Eg: 
            function myfun()
            {
                var a=20;
            }
            myfun();
            console.log(a); //error can't access a beyond function scope 
            //But the above case will run perfectly with let and const.

*/
//variables and data types
var string_str = "Favorite Number : ";
var number_no = 42;
var _bool_ = false;
var _array_ = [1,2,3,4,5,6,7,8,9];
var _undefined_ = undefined;
var _null_ = null;
var _NaN_ = NaN;
console.log(string_str);
console.log(number_no);
//grabbing elements by id
document.getElementById('h3_txt').innerHTML = 'This will show on web page and not on console.'
//taking input from user in form of prompt and store it in a variable and display it
// var r_id = prompt('What is you ID??');
// document.getElementById('r_id').innerHTML = r_id;
//numbers in js
var num = 10;
console.log("Num: ",num);
//increment 
num++;//post
console.log("Post Increment",num);
++num;//pre
console.log("Pre Increment",num);
//decrement
num = 9;
console.log("Num: ",num);
num--//post
console.log("Post Decrement",num);
--num;//pre
console.log("Pre Decrement",num);
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
//Logical operator && ,|| ,!=
//Bitwise operators & , | , ! , ^ , ~
//Relational Operator < , > , == , <= , >=  
/*
    //Note: In JS logical operators do not return boolean expression, rather it returns a number.

    EG: let logicalOperators = 0 || 2 || 3
            console.log(logicalOperators) //output will be the first truth value which in this case is 2.

        let logicalOperators = 0 && 2 && 3
            console.log(logicalOperators) //output will be the first false value which is 0 in this case

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
    1. The keyword return is to return any datatype 
    2. Anything after return keyword will not work 
    3. Eg:
        function myfun(str1 , str2)
        {
            return "Sup";
            console.log(str1); //wont run
            console.log(str2); // wont run
        }
        let result  = myfun("abc","def");
        //output 
            100
    4. By default if programmer is not returning anything javascript will return undefined value.
*/
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
//if else if conditional statements
let myName = "Anish";
if(myName === "Anish")
{
    console.log("Name is Anish.")
}
else if(myName === "Myth")
{
    console.log("Name is Myth.")
}
else{
    console.log("Name is neither Anish nor Myth.")
}
//Data types
//Number Data-types ; String ; Object ; boolean ; undefined ; null value ;etc
var number = 122; //number
var str = "Anish Singh"; //string
var obj = {first_key : "Value_1" , second_key : "Value_2"}; //object
var boolean_value = true; //bool
var array = [1,2,3,4,5,6];
let random; //undefined
let nothing = null; //null value
var string_str = "Favorite Number : ";//string
var number_no = 42;//Number
var _bool = false;//bool
var _array = [1,2,3,4,5,6,7,8,9];
var _undefined = undefined;//undefined
var _null = null;//NULL
var _NaN = NaN;//NaN
 let object = 
 {
     "key name":"value",
     keyname:"value"
 }
 //accessing objects
 //1. object.keyname same as object["keyname"] ---> only for keyname's without spaces
 //2. obeject["keyname"];
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
/*
    One thing to remember is that never use array for key:value pair, because it is highly discouraged.
    arr["Key"] = "Value";----->X
*/
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
//suppose one wants to delete Age in student
delete student.Age;
console.log(student);
/* object with const ... eg const student will not throw error if we perform student.Age = "55";
Because JS doesnt protects from changing key:value pair in objects 
Although it will throw an error if we try to change student .... eg student = "person" is invalid and will give error
*/
//conditional statements --- if else
let age = 45;
if( (age>=18)){status = 'U r my audience'
console.log(status)}
else
{
    status = 'not my audience'
    console.log(status)
}

