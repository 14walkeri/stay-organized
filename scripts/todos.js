// getting html elements for the boys
let userSelect = document.querySelector("#user-select");


// function to show the boys
function loadTodoDrop() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((data) => {
      for (const user of data) {
        let userOption = document.createElement("option");
        userOption.innerText = user.username;
        userOption.value = user.id;
        userSelect.appendChild(userOption);
      }
    });
}



// wiring it up for the boys
window.onload = loadTodoDrop;
