
// targeting and assigning button to the variable buttonEl
var buttonEl = document.querySelector("#save-task");
// targeted the ul in the body
var tasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function() {
  // once clicked it will create a li element
  var listItemEl = document.createElement("li");
  // assignign the new li to the existing class, for style
  listItemEl.className = "task-item";
  // the text withing each new li element
  listItemEl.textContent = "This is a new task";
  // places the new li element within the ul element
  tasksToDoEl.appendChild(listItemEl);
};


// added eventListener to listen for a click
buttonEl.addEventListener("click", createTaskHandler);
