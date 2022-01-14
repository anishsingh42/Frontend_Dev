let inputText = document.getElementById("input-items");
let addBtn = document.getElementById("add-btn");
let itemList = document.getElementById("items-list")
//listen for the click event for the button
addBtn.addEventListener("click", addItems);

//delete the task
itemList.addEventListener('click', deleteTask);


function addItems(e) {
  //fetch the value at the inputText
  let newItem = inputText.value;
  // console.log(newItem); //note newItem is a string type

  if (newItem != "") {
    //add the value to the html in form of list
    //create a newElement
    let taskList = document.createElement('li');
    //styling to the task-list
    taskList.style.borderBottom = '0.25px solid rgba(51, 93, 45, 1)'
    taskList.style.borderRadius = '4px';

    //create a deletebtn 
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "delete-btn";
    deleteBtn.appendChild(document.createTextNode('x'));
    console.log(deleteBtn);

    //styling the deleteBtn
    deleteBtn.style.float = 'right';
    // deleteBtn.style.position = 'fixed'
    
    console.log(taskList);
    //inside this newly created list add newItem
    taskList.appendChild(document.createTextNode(newItem));

    //append it into the taskList
    taskList.appendChild(deleteBtn);
    itemList.appendChild(taskList);
  }
}


function deleteTask(e)
{
  //we are listening for a event in the itemList therefore anywhere you click it might delete the task 
  if(e.target.classList.contains('delete-btn'))
  {
    // console.log(1);
    //the li is the childNode to the div which has the id item-list ... that is div is the parent and li being add is the child
    let liChild = e.target.parentElement;
    // console.log(liChild);
    itemList.remove(liChild);
  }
}