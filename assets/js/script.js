
var formEl = document.querySelector("#task-form");
// targeted the ul in the body
var tasksToDoEl = document.querySelector("#tasks-to-do");



var createTaskHandler = function(event) {

  // prevent browser from refreshing
  event.preventDefault();


  // once clicked it will create a li element
  var listItemEl = document.createElement("li");
  // assignign the new li to the existing class, for style
  listItemEl.className = "task-item";
  // the text withing each new li element
  listItemEl.textContent = "This is a new task";
  // places the new li element within the ul element
  tasksToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler);
