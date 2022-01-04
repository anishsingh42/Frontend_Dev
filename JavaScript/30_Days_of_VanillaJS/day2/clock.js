/*

Date is an object
It represent a point in time
Helps you to do basic operation with date and time



Basic 4 ways to create a Date object 

1. var d1 = new Date();

the above method calls the constructor to represent the date and time

2. var d2 = new Date(12290312)

the above method refers to point in time, the amount of milliseconds past the UNIX time (Jan 1st 1970)

3. the third method is highly discouraged by the MDN reference

4. var d4 = new Date(2022 , 7 , 10 , 22 , 30 , 22);
Date(yr , month , hr , min , sec , millisec);

month = [0,11];


*/


//we will use setInterval(functionName() , timeInMS)
//setInterval will increment the time dynamically

let incrementSec = setInterval(clockOnLoad , 1000);

function clockOnLoad()
{
    let dateAndTime = new Date();
    let time = dateAndTime.toLocaleTimeString();
    let date = dateAndTime.toLocaleDateString();

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = date;
}
