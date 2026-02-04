// Student Exercise - #3
// Register User
// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and
// use the values as parameters for a new function which will add them to string
// Finaly print the string in a new p element on the screen
// Time to accomplish: 15 minutes

// Rename this variable (it was conflicting with the function name)

let inputs = document.getElementById("userInputs").children;
let resultPtag = document.getElementById("result");
let submitBtn = document.getElementById("registerBtn");

function getUserInfo(inputElements) {
  let result = "User is: ";
  for (let input of inputElements) {
    result += input.value + " "; // Added .value here!
  }
  return result;
}

submitBtn.addEventListener("click", function () {
  resultPtag.innerText = getUserInfo(inputs); // Now 'inputs' is defined!
});
