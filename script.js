document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim(); //gets and trims user input value

    // checks if user input is empty
    if (taskText == "") {
      alert("Please,Enter A Task");
    }

    // checks if the userinput is not empty
    if (taskText != "") {
      const newListItem = document.createElement("li"); // create a list(li) html element
      newListItem.textContent = taskText; // sets the textcontent of the li element
      const removeButton = document.createElement("button"); // creates a button
      removeButton.textContent = "Remove"; // sets the textcontent of the button
      removeButton.className = "remove-btn"; // sets a class property for the button

      //   added an onclick event on the button
      removeButton.onclick = function () {
        taskList.removeChild(newListItem); //removes the li html element
      };

      newListItem.appendChild(removeButton);
      taskList.appendChild(newListItem);
      taskInput.value = "";
    }
  }

  addButton.addEventListener("click", addTask); // event listener added to the addButton element
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask;
    }
  });

  document.addEventListener("DOMContentLoaded", addTask);
});

