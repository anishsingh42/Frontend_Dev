// Accessing the variables
//ul
const taskList = document.querySelector('.collection')
//addbtn
const addBtn = document.querySelector('#add-task');
//clearbtn
const clearBtn = document.querySelector('#clear-task');
//newtaskinput
const newTaskInput = document.querySelector('#task');
//filterTaskinput
const filterTaskInput = document.querySelector('#filter');
//task-form
const taskForm = document.querySelector('#task-form');


//Load all event Listeners 
loadEventListeners();

function loadEventListeners(){
    //Get DOM element from LS
    document.addEventListener('DOMContentLoaded', getTask);

    //add task event
    taskForm.addEventListener('submit', addTask);

    //remove the task event
    taskList.addEventListener('click', removeTask);

    //clear task event
    clearBtn.addEventListener('click', clearTask);

    //filter task event listener
    filterTaskInput.addEventListener('keyup', filterTask);
}

//getTask from Local storage
function getTask(){
    let taskArr;
    if(localStorage.getItem('taskArr') === null){
        taskArr = [];
    }
    else{
        taskArr = JSON.parse(localStorage.getItem('taskArr'));
    }

    taskArr.forEach(function(taskValue){
        //create li element
        const liItem = document.createElement('li');
        //add class to li
        liItem.className = 'collection-item';
        //create a delete item link 
        const delBox = document.createElement('input');
        delBox.setAttribute('type','checkbox');
        delBox.setAttribute('name', 'del-box');
        //add class to link
        delBox.className = 'delete-item';
        delBox.id = 'delete-box';
        //append in li
        liItem.appendChild(delBox);
        //add input to the li
        liItem.appendChild(document.createTextNode(taskValue));
        //add liItem to ul 
        taskList.appendChild(liItem);

    })
}


//addTask
function addTask(e){
    //prevent submit buttons default behavior 
    e.preventDefault();

    //make sure there is a value in new Task input
    if(newTaskInput.value === '')
        alert('Enter a Task!!!');
    else{
        //create li element
        const liItem = document.createElement('li');
        //add class to li
        liItem.className = 'collection-item';
        //create a delete item link 
        const delBox = document.createElement('input');
        delBox.setAttribute('type','checkbox');
        delBox.setAttribute('name', 'del-box');
        //add class to link
        delBox.className = 'delete-item';
        delBox.id = 'delete-box';
        //append in li
        liItem.appendChild(delBox);
        //add input to the li
        liItem.appendChild(document.createTextNode(newTaskInput.value));
        //add liItem to ul 
        taskList.appendChild(liItem);

        //store the value of the input in local storage 
        storeTaskInLocalStorage(newTaskInput.value);

        newTaskInput.value = '';
    }
}

//store task in local storage
function storeTaskInLocalStorage(taskValue){
    let taskArr;
    if(localStorage.getItem('taskArr') === null){
        taskArr = [];
    }
    else{
        taskArr = JSON.parse(localStorage.getItem('taskArr'));
    }

    taskArr.push(taskValue);

    localStorage.setItem('taskArr',JSON.stringify(taskArr));
    if(taskList.children.className === 'deleted-task'){
        let taskArr;
        if(localStorage.getItem('taskArr') === null){
            taskArr = [];
        }
        else{
            taskArr = JSON.parse(localStorage.getItem('taskArr'));
        }

        taskArr.push(taskValue);

        localStorage.setItem('taskArr',JSON.stringify(taskArr));
    }
    
}

//remove task event 
function removeTask(e){
    if(e.target.id === "delete-box"){
        e.target.parentElement.classList.toggle("deleted-task");
        console.log(e.target.parentElement);

        //remove Task from Local Storage
        removeTaskFromLocalStorage(e.target.parentElement);
    }
    
}

//remove Task from local storage
function removeTaskFromLocalStorage(taskItem){
    let taskArr;
    if(localStorage.getItem('taskArr') === null){
        taskArr = [];
    }
    else{
        taskArr = JSON.parse(localStorage.getItem('taskArr'));
    }

    taskArr.forEach(function(taskValue, index){
        if(taskItem.textContent === taskValue){
            taskArr.splice(index, 1);
        }
    });

    localStorage.setItem('taskArr',JSON.stringify(taskArr));
}
//clear task event 
function clearTask(e){
    //slower method
    // taskList.innerHTML = '';

    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //clear task from local storage
    clearTaskFromLocalStorage();
}

//clear task from local storage
function clearTaskFromLocalStorage(){
    localStorage.clear();
}

// Filter Tasks
function filterTask(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.lastChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
          task.style.display = 'block';
      }
      else{
          task.style.display = 'none';
      }
    //   console.log();
    });
  }