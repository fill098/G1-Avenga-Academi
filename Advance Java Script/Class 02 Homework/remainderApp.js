// Reminder App
// Create a reminder app
// There should be:
// An input for entering the title
// An input for entering priority
// An input for color
// A textarea for adding a description
// A button for adding the reminder
// A button for showing all reminders
// When the button for adding is clicked an object needs to be created with
// the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

let reminders = [];

function addReminder() {
  let titleInput = document.getElementById("title").value;
  let priorityInput = document.getElementById("priority").value;
  let colorInput = document.getElementById("color").value;
  let descriptionInput = document.getElementById("description").value;

  let newReminder = new Reminder(
    titleInput,
    priorityInput,
    colorInput,
    descriptionInput,
  );

  reminders.push(newReminder);

  console.log(reminders);
  document.getElementById("title").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("color").value = "";
  document.getElementById("description").value = "";
}

function showRemander() {
  let tableId = document.getElementById("tbody-id");

  tableId.innerHTML = "";
  for (let reminder of reminders) {
    tableId.innerHTML += `
  <tr>
    <td style = "color:${reminder.color}">${reminder.title}</td>
    <td>${reminder.priority}</td>
    <td>${reminder.description}</td>
  </tr>
  `;
  }
}

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function (event) {
  event.preventDefault();
  addReminder();
});

let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function (event) {
  event.preventDefault();
  showRemander();
});
