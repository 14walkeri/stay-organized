// getting html elements for the boys
let userSelect = document.querySelector("#user-select");
let todoCards = document.querySelector("#todo-card");
let divDisplay = document.querySelector("#display");
// function to show the boys
function loadTodoDrop() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((data) => {
      for (const user of data) {
        let userOption = document.createElement("option");
        userOption.innerText = user.name;
        userOption.value = user.id;
        userSelect.appendChild(userOption);
      }
    });
}
// function that fetches via user id to return todo sepcified to user
function displayTodos() {
  fetch(`http://localhost:8083/api/todos/byuser/${userSelect.value}`)
    .then((response) => response.json())
    .then((todos) => {
      for (let todo of todos) {
        if (todoCards == true) {
          todoCards.removeChild(todoCards);
          buildACard(todo);
        } else {
          buildACard(todo);
        }
      }
    });
}
// getting my cards to show function
function buildACard(todo) {
  let currentCard = document.createElement("div");

  let currentH3 = document.createElement("h3");
  let currentH5 = document.createElement("h4");
  let currentP = document.createElement("h5");
  let currentP2 = document.createElement("p");

  currentCard.classList.add("card");

  currentH3.innerText = todo.category;
  currentH5.innerText = todo.description;
  currentP.innerText = todo.deadline;
  currentP2.innerText = `Piority:${todo.priority}\nCompleted:${todo.completed}`;

  currentCard.appendChild(currentH3);
  currentCard.appendChild(currentH5);
  currentCard.appendChild(currentP);
  currentCard.appendChild(currentP2);

  todoCards.appendChild(currentCard);
}

// function to clear cards
userSelect.addEventListener("change", function () {
    displayTodos();
    while (todoCards.firstChild) {
      todoCards.removeChild(todoCards.firstChild);
    }
  });
// wiring it up for the boys
window.onload = loadTodoDrop;


