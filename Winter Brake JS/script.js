// let a = "red";
// let b = "blue";

// let swapVar = a;
// a = b;
// b = swapVar;

// console.log(a);
// console.log(b);

// let hour = 18;

// if (hour >= 6 && hour < 12) {
//   console.log("Good Morning");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good Afternon");
// } else {
//   console.log("Good Eveninig");
// }

// function maxNumber(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }

// console.log(maxNumber(56, 55));

// function isLandScape(width, hight) {
//   return width > hight;
// }

// let number = fizzBuzz("filp");
// console.log(number);

// function fizzBuzz(num) {
//   if (typeof num !== "number") return NaN;
//   if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
//   if (num % 5 === 0) return "Buzz";
//   if (num % 3 === 0) return "Fizz";
//   return num;
// }

// function checkSpeed(speed) {
//   let speedLimit = 70;
//   let kmPerPoints = 5;

//   if (speed < speedLimit) {
//     console.log("ok");
//   } else {
//     let points = Math.floor((speed - speedLimit) / kmPerPoints);
//     if (points >= 12) {
//       console.log("Lisince is suspended");
//     } else {
//       console.log("Points", points);
//     }
//   }
// }

// checkSpeed(71);

// function showNum(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 === 0 ? "Even" : "Odd";
//     console.log(i, message);
//   }
// }

// showNum(10);

// function countTruthy(array) {
//   let count = 0;
//   for (value of array) {
//     if (value) {
//       count++;
//     }
//   }
//   return count;
// }
// let array = ["", null, NaN, 0, 1, 2, NaN, 3];
// // console.log(countTruthy(array));
// countTruthy(array);

// const movie = {
//   title: "a",
//   relaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };
// for (let key in movie) {
//   console.log(key, movie[key]);
// }

// function showPropertis(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// showPropertis(movie);

// function sum(lim) {
//   let sum = 0;
//   for (let i = 0; i <= lim; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sum(12));

// const marks = [80, 80, 80];

// function calcualteGrade(marks) {
//   let sum = 0;

//   for (mark of marks) {
//     sum += mark;
//   }
//   let avrageSum = sum / marks.length;

//   if (avrageSum <= 59) return "F";

//   if (avrageSum <= 69) return "D";

//   if (avrageSum <= 79) return "C";

//   if (avrageSum <= 89) return "B";

//   if (avrageSum <= 100) return "A";
// }

// console.log(calcualteGrade(marks));

// showStars(4);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }

// function showPrime(limit) {
//   for (let i = 2; i <= limit; i++) {}
// }

// showPrime(20);

// let address = {
//   street: "Jane Sandanski",
//   city: "Skopje",
//   zipCode: 1000,
// };

// let value = new ShowAddressFactory(
//   address.street,
//   address.city,
//   address.zipCode
// );

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// let address1 = new Address("a", "b", "c");
// let address2 = new Address("a", "b", "c");

// // console.log(address1);
// // console.log(address2);

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// console.log(areSame(address1, address2));

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// console.log(areEqual(address1, address1));

let post = {
  title: "Filip",
  body: "Muscilar",
  author: "Mihajlovski",
  views: 187,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLIve: true,
};

console.log(post);

 function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
