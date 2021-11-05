//adding the rock img
let image_rock = document.createElement('img');
image_rock.src = "./img/rock1.PNG";
image_rock.width = 150;
image_rock.height = 150;
let div_r = document.getElementById('rock');
div_r.appendChild(image_rock);

//adding the paper img 
let image_paper = document.createElement('img');
image_paper.src = "./img/paper1.PNG";
image_paper.height = 150;
image_paper.width = 150;
let div_p = document.getElementById('paper');
div_p.appendChild(image_paper);

//adding the scissors img
let image_scissors = document.createElement('img');
image_scissors.src = "./img/scissors1.PNG";
image_scissors.height = 150;
image_scissors.width = 150;
let div_s = document.getElementById('scissors');
div_s.appendChild(image_scissors);

//return the object that is usersChoice in this case ... observe we have written rpsGame(this) in html onclick attribute 
function rpsGame(userChoice)
{
    console.log("user",userChoice.id)
    var humanChoice, botChoice;
    //humanChoice = userChoice.id;
    // random computer input between 0-2
    botChoice = randomComputerInput(); 
    console.log("Bot",botChoice);
    //get to know the results ---> results should be in a form of array === [1,0] or [0.5,0.5] or [0,1] humanScore and botScore respectively
    var results = decideWinner(humanChoice,botChoice);
    //once you have the results you need to print a a message
    //message = outputMessage(results) //it will return in a form of JS object === {message: "Won/Lost/Tie" ; color: "Green/Red/Grey"}
    //we also have to manipulate the frontend 
    // rpsfrontend(humanChoice,botChoice,message)
}

function randomComputerInput()
{
    return ["rock","paper","scissors"][Math.floor(Math.random()*3)]
}

function decideWinner(yourChoice,computerChoice)
{

}