document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  let taskArray = [];

  // Load tasks from Local Storage
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    taskArray = JSON.parse(storedTasks);
    taskArray.forEach((task) => {
      addToDOM(task);
    });
  }

  // Function to add task to DOM
  function addToDOM(taskText) {
    const newListItem = document.createElement("li"); // create a list(li) html element
    newListItem.textContent = taskText; // sets the textcontent of the li element

    const removeButton = document.createElement("button"); // creates a button
    removeButton.textContent = "Remove"; // sets the textcontent of the button
    removeButton.className = "remove-btn"; // sets a class property for the button

    // Add an onclick event on the button to remove task when clicked
    removeButton.onclick = function () {
      taskList.removeChild(newListItem); //removes the li html element
      taskArray = taskArray.filter((task) => task !== taskText); // Update tasks array
      localStorage.setItem("tasks", JSON.stringify(taskArray)); // Update Local Storage
    };

    newListItem.appendChild(removeButton);
    taskList.appendChild(newListItem);
  }

  // Function to add task
  function addTask() {
    const taskText = taskInput.value.trim(); // gets and trims user input value

    // checks if user input is empty
    if (taskText === "") {
      alert("Please, Enter A Task");
      return;
    }

    // checks if the user input is not empty
    if (taskText !== "") {
      addToDOM(taskText); // Add task to the DOM
      taskArray.push(taskText); // Add task to the array
      localStorage.setItem("tasks", JSON.stringify(taskArray)); // Save updated array to Local Storage
      taskInput.value = ""; // Clear input field
    }
  }

  // Event listener for the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Event listener for pressing "Enter" in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(); // Call addTask when Enter is pressed
    }
  });
});

