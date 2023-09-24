//Variable Declaration
let inputTextToDo = document.querySelector("#todoInput").value;
const btnAddTask = document.querySelector("#addTask");
let ulTaskList = document.querySelector("#taskList");

//Input validation
function validateInput(todo){
    return todo.length === 0 && todo === '' ? true : false;
}

if(btnAddTask.addEventListener("click", function() {
    if(validateInput(inputTextToDo)){
        alert("Please enter your task before we may proceed.");
    }else{

    }
}));