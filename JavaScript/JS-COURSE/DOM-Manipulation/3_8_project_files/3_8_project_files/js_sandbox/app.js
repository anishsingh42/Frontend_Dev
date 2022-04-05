//event listeners 
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('HEHE');
//     e.preventDefault();
// })


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // console.log('hehe');
    let val = e;
    val = e.target;

    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    val = e.target.innerText = 'Hehe';

    //type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //axis relative to window
    val = e.clientY;
    val = e.clientX;
    
    //axis relative to element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}