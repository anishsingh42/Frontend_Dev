
//return the object that is usersChoice in this case ... observe we have written rpsGame(this) in html onclick attribute 
function rpsGame(userChoice)
{
    console.log("user",userChoice.id)
    var humanChoice, botChoice;
    humanChoice = userChoice.id;
    // random computer input between 0-2
    botChoice = randomComputerInput(); 
    console.log("Bot",botChoice);
    //get to know the results ---> results should be in a form of array === [1,-1] or [0,0] or [-1,1] humanScore and botScore respectively
    var results = decideWinner(humanChoice,botChoice);
    console.log(results);
    //once you have the results you need to print a a message
    //it will return in a form of JS object === {message: "Won/Lost/Tie" ; color: "Green/Red/Grey"}
    var message = outputMessage(results);
    console.log(message); 
    //we also have to manipulate the frontend 
    rpsfrontend(humanChoice,botChoice,message)
}

function randomComputerInput()
{
    //by default math.random() returns random decimal number between 0-1
    return ["rock","paper","scissors"][Math.floor(Math.random()*3)]
}

function decideWinner(yourChoice,computerChoice)
{
    // objects of objects
    var rpsDatabase = 
    {
        "rock" : {"rock":0 , "paper":-1 , "scissors":1},
        "paper" : {"rock":1 , "paper":0 , "scissors":-1},
        "scissors" : {"rock":-1 , "paper":1 , "scissors":0}
    }
    //yourChoice = rock ; botChoice = paper
    var humanScore = rpsDatabase[yourChoice][computerChoice];//rpsDatabase[rock][paper] ==> humanScore = -1
    var botScore  = rpsDatabase[computerChoice][yourChoice];//rpsDatabase[paper][rock] ==> botScore = 1

    return [humanScore,botScore];
}

function outputMessage([humanScore,botScore])
{
    if(humanScore === -1)
        return {'message':"You Lost" , 'color':"Red"};
    else if(humanScore === 0)
        return {'message':"Match Tied" , 'color':"Grey"};
    else
        return {'message':"You Won" , 'color':"Green"};
}


function rpsfrontend(humanImageChoice, botImageChoice, finalOutputMessage)
{
    //storing the image.src in objects so that it can be easily accessed
    var imageDatabase =
    {
        "rock" :document.getElementById('rock').src,
        "paper" :document.getElementById('paper').src,
        "scissors" :document.getElementById('scissors').src
    }
    console.log(imageDatabase[humanImageChoice])
    //creating more divs to store image and msg 
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');

    //onclick remove the div in flex-box-container-3
    document.getElementById('rock-div').remove();
    document.getElementById('paper-div').remove();
    document.getElementById('scissors-div').remove();

    // //we need to enter the humanImageChoice in the frontend
    humanDiv.innerHTML = "<img src='"+imageDatabase[humanImageChoice]+"' height='150px' width='150px'  style='box-shadow: 0px 10px 20px aquamarine;'>"
    //printing the final message
    msgDiv.innerHTML = "<h1 style='color:"+finalOutputMessage['color']+"; font-size:60px; font-family: monospace;'>"+finalOutputMessage['message']+"</h1>"
    //we need to add the botImageChoice in the frontend
    botDiv.innerHTML = "<img src='"+imageDatabase[botImageChoice]+"' height='150px' width='150px' style='box-shadow: 0px 10px 20px red;'>"
    
    //appending the div in flex-box-container-3
    document.getElementById('flex-box-container-3').appendChild(humanDiv);
    document.getElementById('flex-box-container-3').appendChild(msgDiv);
    document.getElementById('flex-box-container-3').appendChild(botDiv);
}