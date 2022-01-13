let inputText = document.getElementById("input-items");
let addBtn = document.getElementById("add-btn");
let itemList = document.getElementById("items-list")
//listen for the click event for the button
addBtn.addEventListener("click", addItems);

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
    
    console.log(taskList);
    //inside this newly created list add newItem
    taskList.appendChild(document.createTextNode(newItem));
    itemList.appendChild(taskList);
  }
}
