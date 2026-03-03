// Exercise 1
// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method
// Create a Student constructor function that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects

// Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!
// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy

function Person(firstNAme, lastName, age) {
  this.firstNAme = firstNAme;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    console.log(`My full name is: ${this.firstNAme} ${this.lastName}`);
  };
}

function Student(firstNAme, lastName, age, academyName, studentId) {
  Object.setPrototypeOf(this, new Person(firstNAme, lastName, age));
  this.academyName = academyName;
  this.studentId = studentId;

  this.study = function () {
    console.log(`${this.firstNAme} is studying in the ${this.academyName} with ID: ${this.studentId} `);
  };
}

let student1 = new Student("Martin", "Mihajlovski", 36, "Network Academy", 92875124);

console.log(student1);
student1.getFullName();
student1.study();

let student2 = new Student("Matej", "Dimitrovski", 26, "Football Academy", 12415243634);

console.log(student2);
student2.getFullName();
student2.study();

Person.prototype.getStudentAcademy = function (student) {
  return student.academyName;
};
let person = new Person("filip", "mihh", 30);
console.log(person);
console.log(student1);
console.log(person.getStudentAcademy(student1));
console.log(person.getStudentAcademy(student2));

function DesignStudent(firstNAme, lastName, age, studentId) {
  Object.setPrototypeOf(this, new Student(firstNAme, lastName, age, "Design Academy", studentId));
  this.isStudentOfTheMonth = false;
  this.attendAdobeExam = function () {
    console.log(`The student ${this.firstNAme} is doinig an adobe exame!`);
  };
}

let designeStudent1 = new DesignStudent("Jane", "Kalabsas", 22, 784634);

designeStudent1.getFullName();
designeStudent1.study();
designeStudent1.attendAdobeExam();
console.log(person.getStudentAcademy(designeStudent1));

function CodeStudent(firstNAme, lastName, age, studentId) {
  Object.setPrototypeOf(this, new Student(firstNAme, lastName, age, "Code Academy", studentId));
  this.hasIndividualProject = false;
  this.hashasGroupProject = false;

  this.doProject = function (type) {
    if (type === "individual") {
      console.log(`The student ${this.firstNAme} has a idividual project!`);
      this.hasIndividualProject = true;
    } else if (type === "group") {
      console.log(`The student ${this.firstNAme} has  a group projcet!`);
      this.hashasGroupProject = true;
    }
  };
}

let codeStudnt = new CodeStudent("Stefan", "Dimovski", 25, 73847);

codeStudnt.doProject("individual");

console.log(codeStudnt.hasIndividualProject);

codeStudnt.doProject("group");
console.log(codeStudnt.hashasGroupProject);

function Networktudent(firstNAme, lastName, age, studentId, academyPart) {
  Object.setPrototypeOf(this, new Student(firstNAme, lastName, age, "Network Academy", studentId));

  this.academyPart = academyPart;

  this.attendCiscoExam = function () {
    console.log(`The student${this.firstNAme} is doinig a CCNA exam!`);
  };
}

let networkStudent = new Networktudent("Ivan", "Petkov", 28, 400003, 3);

networkStudent.getFullName();
networkStudent.study();
networkStudent.attendCiscoExam();

console.log(person.getStudentAcademy(networkStudent));
