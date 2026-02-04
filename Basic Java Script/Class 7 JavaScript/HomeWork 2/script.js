// HOMEWORK Part 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well
// ( 2 + 4 + 5 = 11)

let array = [5, 6, 8, 19, 5, 23];

let list = document.getElementById("numberList");

for (key of array) {
  let listItem = document.createElement("li");
  listItem.textContent = key;
  list.appendChild(listItem);
}

let sum = 0;

for (value of array) {
  sum += value;
}

let pTags = document.getElementById("sum");
pTags.textContent = "sum:" + sum;
