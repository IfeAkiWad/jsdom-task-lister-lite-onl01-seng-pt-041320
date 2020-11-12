document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // adding tasks
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById('tasks')
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('new-task-description');
    if (taskInput.value !== null) {
    const li = document.createElement('li');
    li.innerText = taskInput.value;
    const btn = document.createElement('button');
    btn.innerText = "🗑"
    btn.className = "delete"
    li.append(btn)
    document.getElementById('tasks').append(li);
    taskInput.value = null;
    }
  });

  // Delete tasks
  taskList.addEventListener('click', function(e){
    console.log(e.target)
    if (e.target.className === "delete") {
      e.target.parentElement.remove();
    }
  })
});


