// HOMEWORK Part 1

// Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs
// HOMEWORK Part 2
// It is recommended to use AI tools for this task.

// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt() or read them from HTML
// Thank you!
// Questions?

let animal = {
  name: "Max",
  kind: "Dog",

  speak: function (message) {
    console.log(`${this.name} the ${this.kind} says: ${message}`);
  },
};

let nameInput = document.getElementById("name");
let kindInput = document.getElementById("kind");
let messageInput = document.getElementById("message");

let button = document.getElementById("button");

button.addEventListener("click", function () {
  let name = nameInput.value;
  let kind = kindInput.value;
  let message = messageInput.value;

  animal.name = name;
  animal.kind = kind;
  animal.speak(message);
});

// HOMEWORK Part 2
// It is recommended to use AI tools for this task.

// Write a JavaScript program to display the reading status of some book.
// The object should have the next properties: title, author, readingStatus and
//  a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
//  (if false).
// Bonus: enter the values from prompt() or read them from HTML

let book = {
  title: "The Robots of dawn",
  author: "Isaac Asimov",
  readingStatus: true,

  getStatus: function () {
    if (this.readingStatus) {
      return `Already read ${this.title} by ${this.author}`;
    } else {
      return `You still need to read ${this.title} by ${this.author}`;
    }
  },
};

let status = book.getStatus();
console.log(status);
