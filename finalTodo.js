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
  task.className = priorityValue;
  localSave("todoList");
}
        
check = function() {
  if (this.checked) {
    this.parentNode.classList.add("finished");
  }
  else {
    this.parentNode.classList.remove("finished");
  }
  localSave("todoList");
}
