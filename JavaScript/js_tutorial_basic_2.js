//switch statements --- same as cpp
//when a lot of cases needs to be checked ... better to use switch case
//switch case follows fall pattern thats why add break when required 
let _age_ = 20;
switch(_age_)
{
    case 20:
        console.log("You are 20");
        break;
    case 21:
        console.log("You are 21.");
        break;
    default:
        console.log("Neither 20 nor 21");
}

//loops are same as in any other languages like C++
/*Three loops: 
    for(initialize;condition;increment/decrement){//body}
    
    while(condition)
    {
        //body
        increment/decrement
    }

    do
    {
        //body
    }while(condition)
*/

/*
    break , continue and return same as C++
    1. break : gets user out of the loop after fullfillment of the condition.
    2. continue : skips the specific condition.
    3. return: returns the type. Write it inside a function
*/


//array mapping 
let array1 = [1,2,3,4,5,6,7,8,9,0];
//element stands for node in js
let array2 = array1.map((element)=>{
    return element*2;
})

console.log("New mapped array: ",array2);

//Filter on Arrays
//it filters elements in the new array
//if the condition is true only then the elements will be included other wise not 
/*
Writing like this:
    let myfun = () =>{
        //body
    }

is same as writing like this;
    function myfun()
    {
        //body
    }

*/
let newArr = array2.filter((element)=>{
    if(element >= 10) return true;
    return false;
})

console.log("Copy array: ",newArr);

//Foreach on arrays

/*
    it is same as:

    for(let i=0;i<array1.length;i++)
    {
        constn element = array1[i];
    }
*/
let nameArray = ["Anish", "Singh", "Neo" , "Leo"];
nameArray.forEach((element)=>{
    console.log(element);
})

//array reduce 
//reduce the array into a single value
// The accumulator is the net result of the function. It contains either the initial value or the return value of the last call.

// The current value is just the element being worked against.

const res = array1.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});

console.log("Sum of array is: ",res);
/*
    acc = 0 ; val = 1;
    acc = 0+1 ; val = 2;
    acc = 0+1+2 ; val = 3;
    .... so on 
    acc =0+1+2+3+4+5+6+7+8 ; val = 9
*/

//indexOf returns the index of the element
let index = nameArray.indexOf("Neo");

console.log("index of Neo is: ",index);

//if a element doesnot exists than it will return -1

//to get a boolean value type > -1 (in console.log) to get false of true
console.log("Burgers doesnot exist therefore false: ",nameArray.indexOf("Burgers" ) > -1);

//or can also use includes(); which automatically returns boolean value
let _bool__ = nameArray.includes("Anish");
console.log("Anish does exists hence true: ",_bool__);

//find

let studentInClass = 
        [
            {
                "name":"anish",
                "age":"18",
                "bod":"1/5/2002"
            },
            {
                "name":"John",
                "age":"19",
                "bod":"2/7/2001"
            }
        ];
//objectName can be anything ... just for syntax i wrote objectName
const studentDetail = studentInClass.find(objectName => {
    return objectName.age === "18";
});

console.log("Student with age 18: ",studentDetail);

/*
    DOM :
        1. Document and window object 
            Document is an object consists the html , head , body ...
            whereas window is above document it consist all the properties methods and even document in it.

            write document and window in console to know more

            want to look into document/window properties write console.dir(document); or console.dir(window);

            document.getElementById(); ===> window.document.getElementById();   ...
            but we don't have to write window every time we access a property in document.
*/


//set Interval and Set Timeout
//setTimeout manipulates after a particular duration //duration given in millsecs
let secCounter = 0
let idTimeout = setTimeout(()=>
{
    document.getElementById("timeout").innerHTML = "Text changed exactly after 2 secs";
    //clearTimeout(idTimeout);
} , 2000);

//setInterval updates after the every 'n' secs specified in this case 2 sec

let counter = 0;
let idInterval=setInterval(()=>
{
    document.getElementById("interval").innerHTML=counter++;

    if(counter === 10)
        clearInterval(idInterval)
},2000)

//u can also clear them by using clearTimeout and clearInterval respectively


//Error Handling 
//js uses try{}catch(){} to handles errors just like python

let number111 = 100;
let number222 = 0;

try{
    //write a code that might produce a error
    if(number222===0)
    {
        throw "Number222 is 0 hence division is not possible..."
    }
    else{
        let resultDivision = number111/number222;
        console.log("No error hence output: ",resultDivision);
    }
}catch(error)
{
    console.log(error);
}

number111 = 100;
number222 = 5;

try{
    //write a code that might produce a error
    if(number222===0)
    {
        throw "Number222 is 0 hence division is not possible..."
    }
    else{
        let resultDivision = number111/number222;
        console.log("No error hence output: ",resultDivision);
    }
}catch(error)
{
    console.log(error);
}