// List generator from an array
// Create an array of 5 names
// Create an HTML page with:
// A header
// An empty unordered list
// A button
// When the button is clicked it should fill in the empty unordered list with the names of the array

let array = ["filip", "martin", "milena", "stefan", "ogi"];

let btn = document.getElementById("btn");
let nameList = document.getElementById("nameList");

btn.addEventListener("click", function () {
  nameList.innerHTML = "";
  for (let name of array) {
    nameList.innerHTML += `<li>${name}</li>`;
  }
});
