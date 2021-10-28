//challenge1 age in days


//we want prompt to appear after we click CLICK ME button
//so create a function
function ageInDays()
{
    //take input of the users birth year
    let birthYear = 0;
    birthYear =  prompt("What is your Birth Year??");

    //take input of the current year
    let currentYear = 0;
    currentYear= prompt("What is your Current Year??");

    //subtract currentYear - birthYear to get the current age
    let age = currentYear - birthYear;

    //add the age in div flex-box-result
    document.getElementById('flex-box-result').innerHTML = "You are "+age*365+" day's old...";
}

//by clicking on reset we should be able to remove the text that just appeared

function reset()
{
    //remove the node aka DOM
    document.getElementById('flex-box-result').remove();
}

