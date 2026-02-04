// Create a student registry page
// Create an HTML page with student registry form with
// First Name
// Last Name
// Age
// Email
// Create a student generator function
// When the form is submitted, the inputs should be compiled
// into a new object from the generator function Student
// This student should be added to a list called "database"
// After submit the database should be printed in the console
// The input fields should be cleared

function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

let database = [];

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function (event) {
  event.preventDefault();
  let firstName = document.getElementById("input-firstname").value;
  let lastName = document.getElementById("input-lastname").value;
  let age = document.getElementById("input-age").value;
  let email = document.getElementById("input-email").value;

  let student1 = new Student(firstName, lastName, age, email);

  database.push(student1);

  console.log(database);

  document.getElementById("input-firstname").value = "";
  document.getElementById("input-lastname").value = "";
  document.getElementById("input-age").value = "";
  document.getElementById("input-email").value = "";
});
