function updateDate() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    document.getElementById("current-date").textContent = now.toLocaleDateString(
      "en-US",
      options
    );
  }
  updateDate();
  
  function addTask() {
    const taskInput = document.getElementById('task');
    const priorityInput = document.getElementById('priority');
    const dueDateInput = document.getElementById('due-date');
    const taskText = taskInput.value.trim();
    const priority = priorityInput.value;
    const dueDate = dueDateInput.value;

    if (taskText !== '') {
        const taskList = document.getElementById('todo-list');
        const newTask = document.createElement('div');
        newTask.classList.add("task-item");

        newTask.innerHTML = `
            <div class="task-content">
                <input type="checkbox" class="check-btn" onclick="toggleComplete(event, this)">
                <span class="task-text">${taskText} (Priority: ${priority}, Due: ${dueDate})</span>
                <i class="fas fa-trash delete-icon" onclick="removeTask(event, this)"></i>
            </div>
        `;

        taskList.appendChild(newTask);


        taskInput.value = '';
        priorityInput.value = '';
        dueDateInput.value = '';
    }
}

function removeTask(event, icon) {
  event.stopPropagation(); 
  const taskItem = icon.closest(".task-item"); 
  if (taskItem) {
      taskItem.remove();
  }
}

  function toggleComplete(event, checkbox) {
    event.stopPropagation(); 
    const taskItem = checkbox.closest(".task-item"); 
    const finishedList = document.getElementById("finished-list");
    const todoList = document.getElementById("todo-list");

    if (checkbox.checked) {
        taskItem.classList.add("completed"); 
        finishedList.appendChild(taskItem);  
    } else {
        taskItem.classList.remove("completed"); 
        todoList.appendChild(taskItem);  
    }
}

  document.getElementById("clear-btn").addEventListener("click", clearAllTasks);

    function clearAllTasks() {
    const todoList = document.getElementById("todo-list");
    const finishedList = document.getElementById("finished-list");

    todoList.innerHTML = "";
    finishedList.innerHTML = "";
}
