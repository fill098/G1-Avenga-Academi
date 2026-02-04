// Student constructor function
// Create a constructor function for Student objects with:
// Properties:
// firstName
// lastName
// birthYear
// academy
// grades - array of numbers
// Methods:
// getAge() - returns age of student
// getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
// getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

const students = [
  new Student("John", "Doe", 2002, "SEDC Academy", [8, 9, 7, 10, 9]),
  new Student("Jane", "Smith", 2001, "Code Academy", [9, 10, 8, 9, 10]),
  new Student("Mike", "Johnson", 2003, "SEDC Academy", [7, 8, 8, 9, 7]),
];

function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function () {
    let curentYear = new Date().getFullYear();
    return curentYear - this.birthYear;
  };

  this.getInfo = function () {
    return `This is student ${this.firstName} ${this.lastName} from the academy!`;
  };

  this.getGradesAvrige = function () {
    let sum = 0;

    for (let grade of this.grades) {
      sum += grade;
    }

    return sum / this.grades.length;
  };
}

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// console.log(students[0].getAge());
// console.log(students[1].getInfo());
// console.log(students[2].getGradesAvrige());
