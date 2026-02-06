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

// let post = {
//   title: "Filip",
//   body: "Muscilar",
//   author: "Mihajlovski",
//   views: 187,
//   comments: [
//     { author: "a", body: "b" },
//     { author: "c", body: "d" },
//   ],
//   isLIve: true,
// };

// console.log(post);

//  function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// const numbers = arrayFromRande(1, 4);

// function arrayFromRande(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) {
//     output.push(i);
//   }
//   return output;
// }

// console.log(numbers);

// const numbers = [1, 2, 3, 4, 1, 1];
// const output = except(numbers, [2, 1]);

// function except(array, excluded) {
//   const result = [];

//   for (let value of array) {
//     if (!excluded.includes(value)) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// console.log(output);

// const numbers = [1, 2, 3, 4, 5];

// function move(array, index, ofset) {
//   const output2 = [...array];
//   const elememt = output2.splice(index, 1)[0];
//   output2.splice(index + ofset, 0, elememt);
//   return output2;
// }
// const output = move(numbers, 3, -2);

// console.log(output);

// const numbers = [1, 2, 3, 4, 5];

// const coutn = countOcurences(numbers, 3);

// console.log(coutn);

// function countOcurences(array, searchElement) {
// let count2 = 0;
// for (element of array) {
//   if (element === searchElement) count2++;
// }
// return count2;

//   return array.reduce((acummulator, current) => {
//     const ocurence = current === searchElement ? 1 : 0;
//     return acummulator + ocurence;
//   }, 0);
// }

// function countOcurences(array, searchElement) {
//   return array.reduce(function (accumulator, current) {
//     let occurrence = 0;

//     if (current === searchElement) {
//       occurrence = 1;
//     }

//     return accumulator + occurrence;
//   }, 0);
// }

// const numbers = [1, 2, 8, 4, 5, 99];

// const max = [];

// function getMax(array) {
//   //   let max = array[0];
//   //   for (let i = 0; i < array.length; i++) {
//   //     if (array[i] > max) {
//   //       max = array[i];
//   //     }
//   //   }
//   //   return max;

//   return array.reduce((a, b) => (a > b ? a : b));
// }

// console.log(getMax(numbers));

// const movies = [
//   {title: 'a', year: 2018, rating: 4.5},
//   {title: 'b', year: 2018, rating: 4.7},
//   {title: 'c', year: 2018, rating: 3},
//   {title: 'd', year: 2017, rating: 4.5},
// ]

// movies
//   .filter(m => m.year === 2018 && m.rating >= 4)

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
//   return items.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stop has alrady been started");
    }
    running = true;

    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      throw new Error("StopWatch has not been started");
    }
    running = false;

    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
