// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 24
// New requirements HOMEWORK

// All students who are older than 30 (return full name + age)
// All students from a city that starts with B (return full name + city)
// All student emails (just an array of emails)
// All students with average grade exactly 3 (return full name)
// Count how many students are Female and how many are Male
// Use higher order functions to find the answers
// Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

let url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let result = averageAbove3Fun(data);
      console.log(1, result);

      let result1 = femaleStudentsAvg5Fun(data);
      console.log(2, result1);

      let result2 = maleStudentsSkopje18Fun(data);

      console.log(3, result2);

      let result3 = averageGradeFmAbove24Fun(data);

      console.log(4, result3);

      let result4 = maleStFrstnameIndexBabove24(data);
      console.log(result4);

      let result5 = studentOlderThen30(data);
      console.log(5, result5);

      let result6 = studentsCityB(data);
      console.log(6, result6);

      let result7 = emails(data);
      console.log(7, result7);

      let result8 = allStudentsWithGrade3(data);
      console.log(result8);

      console.log(numFemailandMaleStudents(data));
    })
    .catch((err) => console.log(`Found error ${err}`));
};

function averageAbove3Fun(student) {
  return student.filter(
    (st) => st.gender === "Male" && st.firstName.startsWith("B") && st.age > 3,
  );
}

function femaleStudentsAvg5Fun(student) {
  return student
    .filter((st) => st.gender === "Female" && st.averageGrade === 5)
    .map((st) => st.firstName);
}

function maleStudentsSkopje18Fun(student) {
  return student
    .filter(maleStudnetsSkopje18)
    .map((st) => `${st.firstName} ${st.lastName}`);
}

function averageGradeFmAbove24Fun(student) {
  return student
    .filter((st) => st.gender === "Female" && st.age > 24)
    .map((st) => `${st.firstName} ${st.age}  - Average Grade: ${st.averageGrade} `);
}

function maleStFrstnameIndexBabove24(student) {
  return student
    .filter(
      (st) => st.gender === "Male" && st.firstName.startsWith("B") && st.averageGrade > 4,
    )
    .map((st) => `${st.firstName} ${st.firstName.startsWith("B")} ${st.age}`);
}
function maleStudnetsSkopje18(studnet) {
  return studnet.gender === "Male" && studnet.city === "Skopje" && studnet.age > 18;
}

function studentOlderThen30(student) {
  return student
    .filter((st) => st.age > 30)
    .map((st) => `${st.firstName} ${st.lastName} ${st.age}`);
}

function studentsCityB(student) {
  return student
    .filter((st) => st.city.startsWith("B"))
    .map((st) => `city:${st.city} Fullname: ${st.firstName} ${st.lastName}`);
}

function emails(student) {
  return student.map((st) => st.email);
}

function allStudentsWithGrade3(student) {
  return student
    .filter((st) => st.averageGrade === 3)
    .map((st) => `Full Name: ${st.firstName} ${st.lastName} Grade: ${st.averageGrade}`);
}

function numFemailandMaleStudents(student) {
  return student.reduce(
    (acc, st) => {
      st.gender === "Female" ? acc.female++ : acc.male++;
      return acc;
    },
    { female: 0, male: 0 },
  );
}
getData(url);
