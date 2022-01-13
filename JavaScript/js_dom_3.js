//Events 

let submitMail = document.getElementById('submit-mail').addEventListener('click' , buttonClick);

/* 
submitMail.addEventListener('dblclick' , buttonClick);

submitMail.addEventListener('mouseup' , buttonClick);

submitMail.addEventListener('mousedown' , buttonClick);

submitMail.addEventListener('mouseenter' , buttonClick);
submitMail.addEventListener('mouseleave' , buttonClick);

//same as mouseenter and mouseleave but works for the content within the node we are talking about .. more like works for child Node.
submitMail.addEventListener('mouseover' , buttonClick);
submitMail.addEventListener('mouseout' , buttonClick);
*/


function buttonClick(event)
{
    // console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);

    //type of event
    console.log(event.type);
    //position of the mouse from the browser
    console.log(event.clientX);
    console.log(event.clientY);
    //position of the mouse from the button
    console.log(event.offsetX);
    console.log(event.offsetY);
    //to check whether alt shift or ctrl key is down
    console.log(event.altKey);
    console.log(event.shiftKey);
    console.log(event.ctrlKey);

    //mouse eventListeners
    console.log(event.type);
}


let box = document.getElementById('box');
box.addEventListener('mousemove',mouseMove);

let output = document.getElementById('output');

let innerBox = document.getElementById('inner-box');
function mouseMove(e)
{
    output.innerHTML='<h3> X: '+e.offsetX+'</h3> <br> <h3> Y: '+e.offsetY+'</h3>';
    box.style.backgroundColor = "rgb("+e.offsetY+","+e.offsetX+","+e.offsetX%e.offsetY+")";
}


let inputText = document.querySelector('input[type="text"]');
let form = document.querySelectorAll('form');

// inputText.addEventListener('keydown' , keyEvent);
// inputText.addEventListener('keyup',keyEvent);
// inputText.addEventListener('keypress' , keyEvent);

// inputText.addEventListener('focus',keyEvent);
// inputText.addEventListener('blur' , keyEvent);


// inputText.addEventListener('cut',keyEvent);
// inputText.addEventListener('paste' , keyEvent);

// inputText.addEventListener('input' , keyEvent);

// inputText.addEventListener('change' , keyEvent);

function keyEvent(e)
{
    console.log(e.type);

    //keydown keyup and keypress
    // output.innerHTML = '<h4>'+e.target.value+'</h4>'

    //for cut and paste
    // output.innerHTML = '<h5>'+e.target.value+'</h5>'
}


let submitButtonMail = document.querySelector('#submit-mail');

submitButtonMail.addEventListener('submit' , submit);

function submit(e)
{
    console.log(e.type);

    console.log(e.target.value);
}