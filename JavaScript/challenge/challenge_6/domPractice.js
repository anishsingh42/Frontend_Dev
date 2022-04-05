//Selectors
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
const todoAddButton = document.querySelector("#todo-add-btn");
//event listeners
todoAddButton.addEventListener("click" , addTodo);
todoList.addEventListener("click", deleteAndCheck);

//functions
function addTodo(event) {
  //prevent the page from reloading itself
  event.preventDefault();
  if (todoInput.value !== "") {
    // console.log(1);

    //structure we want
    /*
    <ul id="todo-list">
      <div class="todo-div">
        <li class="li-list">
          <!--Content-->
        </li>
        <button class="checkmark-btn"></button>
        <button class="delete-btn"></button>
      </div>
    </ul>
*/

    //fetch the text in the todoInput

    //create a div element
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    // console.log(todoDiv);

    //create a li element
    const liList = document.createElement("li");
    liList.classList.add("li-list");
    liList.innerText = todoInput.value;
    todoDiv.appendChild(liList);

    //create a checkmark button
    const completedTodo = document.createElement("button");
    completedTodo.classList.add("checkmark-btn");
    completedTodo.innerHTML = "&check;";
    todoDiv.appendChild(completedTodo);
    //create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "&#9747;";
    todoDiv.appendChild(deleteBtn);

    //append it in the ul or #todo-list
    todoList.appendChild(todoDiv);
    //clear the input after the input is taken

    todoInput.value = "";
  }
}

function deleteAndCheck(event) {
  //my event is the ul - list
  const item = event.target;
  //target specifies where as the event occurred
  console.log(item.classList);
  if (item.classList.contains("delete-btn")) {
    //alternate way of writing item.classList.contains("delete-btn") would be item.classList[0] === "delete-btn"
    //--> the first indexed in classList is always name of the class
    // let task = document.querySelector('.todo-div').children;
    // console.log(task);
    // item.remove(task);

    //item would be our delete-btn .. here i m trying to access the parent element of the delete-btn which would be the div which it is in.
    const task = item.parentElement;
    // console.log(task);
    task.remove();
  }

  if (item.classList.contains("checkmark-btn")) {
    // console.log(1);
    //access the entire div

    const checked = item.parentElement;

    // const checked = document.querySelector('.li-list');
    //this method wont work fine because it will fetch the first element with class li-list and perform checked activity on that ... irrespective of what indexed check button we are clicking on.

    checked.classList.toggle("checked-todo");
    //toggle checks whether the class checked-tod is present int he selected element or not if yes it will remove the class checked-todo if no it will add the class checked-todo.
    // console.log(checked);
  }
}
