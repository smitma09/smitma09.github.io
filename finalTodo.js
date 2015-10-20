addTask = function() {
  mainList = document.querySelector("#todoList");
  task = document.createElement("li");
  inputValue = document.querySelector("#task").value;
  taskText = document.createTextNode(inputValue);
  priorityValue = document.querySelector("#priority").value;
    
  checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = check;
 
  mainList.appendChild(task);
  task.appendChild(checkbox);
  task.appendChild(taskText);
  task.className = priorityValue; <!-- Lets CSS rules color task based on priority-->
}
        
check = function() {
  this.parentNode.classList.add("finished");
}
