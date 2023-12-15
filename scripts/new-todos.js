// grab all the html elements
const userSelect = document.querySelector("#user-select");
const categorySelect = document.querySelector("#category-select");
const prioritySelect = document.querySelector("#priority-selector");
const taskBox = document.querySelector("#task-box");
const deadLineBox = document.querySelector("#deadline-box");
const addButton = document.querySelector("#add-button");

// functions for user drop down
function loadUserDrop() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      for (const user of users) {
        let userOption = document.createElement("option");
        userOption.innerText = user.name;
        userOption.value = user.id;
        userSelect.appendChild(userOption);
      }
    });
}

// function for category drop down
function loadCategoryDrop() {
  fetch("http://localhost:8083/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      for (const category of categories) {
        let userOption = document.createElement("option");
        userOption.innerText = category.name;
        userOption.value = category.id;
        categorySelect.appendChild(userOption);
      }
    });
}

// function to add user to api
function createNewTodo() {
  const userSelectValue = userSelect.value;

  const categorySelectValue = categorySelect.value;
  const prioritySelectValue = prioritySelect.value;
  const taskBoxValue = taskBox.value;
  const deadLineBoxValue = deadLineBox.value;
  const newTodo = {
    userid: `${userSelectValue}`,
    category: `${categorySelectValue}`,
    description: `${taskBoxValue}`,
    deadline: `${deadLineBoxValue}`,
    priority: `${prioritySelectValue}`,
  };

  fetch("http://localhost:8083/api/todos", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((todo) => {
      return todo;
    });
}

//wiring it all for the boys
loadUserDrop();
loadCategoryDrop();
addButton.onclick = createNewTodo;
