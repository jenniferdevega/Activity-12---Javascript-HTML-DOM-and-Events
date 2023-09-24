//Variable Declaration
const addTask = document.querySelector('#addTask');
const todoInput = document.querySelector('#todoInput');
const taskList = document.querySelector('#taskList');


addTask.addEventListener('click', function() {
  if (todoInput.value === '') {

    // Input Validation
    alert('Please enter task before we may proceed.');

  } else {

    // li creation of task input
    let li = document.createElement('li');
    let newTask = document.createTextNode(`${todoInput.value}`);

    //append values
    li.appendChild(newTask);
    taskList.appendChild(li);

    // Marking as Done - when task is added it will be displayed as strikethrough text. 
    li.addEventListener('click', function() {
      li.classList.toggle('done');
    })

    // Added the Delete button that will display as 'X'
    const buttonDelete = document.createElement('button');
    const btnTextX = document.createTextNode('x');

    //append values
    buttonDelete.appendChild(btnTextX);
    li.appendChild(buttonDelete);

    // When X(button) is click it will remove the task
    buttonDelete.addEventListener('click', function() {
      taskList.removeChild(li);
    })
    
  }

  // Default the text field to empty string
  todoInput.value = '';
})