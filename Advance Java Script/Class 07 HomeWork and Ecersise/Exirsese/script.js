let student = {
  name: "Filip Mihajlovski",
  age: 27,
  acadmey: "Avenga Academy",
  grades: [7, 8, 9, 6, 8, 5, 9, 8, 8, 10, 10],
};

// With no higerh order function All grades above 7 and the sum of them

let allGradesAbove7 = [];
let sum = 0;
for (let grade of student.grades) {
  if (grade > 7) {
    allGradesAbove7.push(grade);
  }
}

console.log(allGradesAbove7);

for (let grade of allGradesAbove7) {
  sum += grade;
}

console.log(sum);

let average = sum / allGradesAbove7.length;

console.log(average);

// With higher order function filter()

let averageGrade =
  student.grades
    .filter((grade) => grade > 7)
    .reduce((newSum, grade) => newSum + grade, 0) / allGradesAbove7.length;

console.log(averageGrade);

let averageGradeCustumFun = student.grades
  .filter((grade) => grade > 7)
  .reduce(reduceArray, 0);

function reduceArray(sum, grade) {
  return (sum += grade);
}

console.log(averageGradeCustumFun);

// Higher order function - every()
let ages = [18, 20, 22, 32, 28, 29, 23, 33, 50, 65];

let isAllMature = ages.every((age) => age >= 18);

console.log(isAllMature);

// Higher order function - some()

let isUnderAge = ages.some((age) => age < 18);

console.log(isUnderAge);

// Higher order function find()
let cities = ["Skopje", "Prague", "Barcelona", "Belgrade", "Ljubljana"];

let Skopje = cities.find((city) => city === "Skopje");

console.log(Skopje);

// Higher order functions findIndex()

let Belgrade = cities.findIndex((city) => city === "Barcelona");

console.log(Belgrade);

// Higher order function includes()

let ljubljanaInArray = cities.includes("Ljubljana");

console.log(ljubljanaInArray);

// Higher order functions flat() and flatMap()

let specialArray = [1, 2, 3, [4, 5, [6, 7, [{}, {}]]]];

let flattend = specialArray.flat(Infinity);

console.log(flattend);

let emptySpace = cities.flatMap((city) => city.split(""));

console.log(emptySpace);

// Higher order function - join()

let joindArray = emptySpace.join(",");

console.log(joindArray);

// Higher order function - slice()

// Great! You're getting a really solid understanding of JavaScript concepts.
// Just to recap what we've covered today:

// reduce() — accumulate values into one result
// every() — check if ALL elements pass a condition
// some() — check if AT LEAST ONE element passes
// find() — get the first matching element
// findIndex() — get the index of the first match
// includes() — check if a value exists
// map() — transform every element
// flat() — flatten nested arrays
// flatMap() — map and flatten in one step
// slice() — copy a portion of an array
// splice() — add, remove, or replace elements
// Pure vs Impure functions — separating logic from side effects
