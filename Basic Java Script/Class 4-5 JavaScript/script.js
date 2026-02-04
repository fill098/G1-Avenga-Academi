// function inputInArry(){
//     let count = parseInt(prompt('How many numbers do you want to enter?'))
//     let numbers = [];
    

// for (let i = 0; i < count; i++) {
//     let num = parseInt(prompt(`Enter number ${i + 1}:`));
//     numbers.push(num);
//     }
// }


// ==========================================

// 1. Average of Numbers
// Goal: Ask the user for how many numbers they want to enter, store them in an array, \
// and calculate the average.

// Function: function calculateAverage()

// Input:

// Number count
// Numbers
// Output: Average value

// Test Cases:

// Input: 3, 10, 20, 30 → Output: 20
// Input: 4, 5, 5, 5, 5 → Output: 5



// function calculateAverage() {
//     let count = parseInt(prompt('How many numbers do you want to enter?'))
//     let numbers = [];
//     let sum = 0;


// for (let i = 0; i < count; i++) {
//     let num = parseInt(prompt(`Enter number ${i + 1}:`));
//     numbers.push(num);
//     sum = sum + num;
    
// }

// let average = Math.round(sum / count);
// return average;

// }

// let result = calculateAverage();
// console.log('Avrege:', result)

// ======================================================

// Count Even Numbers
// Goal: Store user input numbers in an array and count how many are even.

// Function: function countEvenNumbers()

// Input:

// Array of numbers
// Output: Count of even numbers

// Test Cases:

// Input: [1, 2, 3, 4, 6] → Output: 3
// Input: [7, 9, 11] → Output: 0



// function countEvenNumbers() {
//     let count = parseInt(prompt('How many number do you want to chek:'))
//     let number = []
//     let evenCount = 0;

//     for (let i = 0; i < count; i++) {
//         let num = parseInt(prompt(`Enter number ${i + 1}`))
//         number.push(num);

//     if (num % 2 === 0) {
//         evenCount ++;
        
//         }
//     }
//     return evenCount;
// }



// console.log("Even numbers count:", countEvenNumbers());

// =============================================================

// 3. Find the Smallest Number
// Goal: Read numbers into an array and determine the smallest value.

// Function: function findSmallest()

// Input:

// Array of numbers
// Output: Smallest number

// Test Cases:

// Input: [4, 2, 9, 1] → Output: 1
// Input: [10, 20, 30] → Output: 10



// function findSmallest() {
//     let count = parseInt(prompt('How many numbers do you want to enter'))
//     let array = []
    

//     for (let i = 0; i < count; i++){
//         let num = parseInt(prompt(`Enter number ${i + 1} `))
//         array.push(num)

//     }

//     let smallest = array[0]
    
//     for(let i = 1; i < array.length; i++){
//         if (array[i] < smallest ) {
//             smallest = array[i]
//         }

//     }
//    return smallest;
// }

// console.log('The smallest value is: ', findSmallest())

// ====================================================

// 4. Reverse an Array
// Goal: Create an array and output a new array with reversed order.

// Function: function reverseArray()

// Input:

// Array
// Output: Reversed array

// Test Cases:

// Input: [1, 2, 3] → Output: [3, 2, 1]
// Input: [5, 10] → Output: [10, 5]


// function reverseArray(arr){
// let reversed = []
// for ( let i = arr.length - 1 ; i >= 0; i--){
//     reversed.push(arr[i])

// }

// return reversed;
// }

// console.log(reverseArray([1, 2, 3])); 
// console.log(reverseArray([5, 10])); 


// ======================================================

// 5. Sum of Positive Numbers
// Goal: Store numbers in an array and calculate the sum of positive values.

// Function: function sumPositiveNumbers()

// Input:

// Array of numbers
// Output: Sum of positive numbers

// Test Cases:

// Input: [1, -2, 3, -4, 5] → Output: 9
// Input: [-1, -2, -3] → Output: 0


// function sumPositiveNumbers(arr){
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] > 0) {
//             sum = sum + arr[i]
//         }
//     }

//     return sum;


// }


// console.log(sumPositiveNumbers([1, 5, -8, 10, 17]))

// ===================================


// 6. FizzBuzz
// Goal: Print numbers from 1 to 100 with specific replacement rules.

// Function: function fizzBuzz()

// Output: Sequence of numbers with "Fizz", "Buzz", or "FizzBuzz"

// Test Cases:

// Input: 3 → Output: "Fizz"
// Input: 5 → Output: "Buzz"
// Input: 15 → Output: "FizzBuzz"

// function fizzBuzz() {

//     for(let i = 0; i <= 100; i++){
//         if ( i % 15 === 0){
//             console.log('FizzBuzz');
//         }else if ( i % 5 === 0){
//             console.log('Buzz')
//         }else if(i % 3 === 0){
//             console.log('Fizz');
//         }else{
//             console.log(i);
//         }
//     }
        
    
// }

// fizzBuzz();


// ================================


// 7. Sum Until Zero
// Goal: Continuously ask for numbers and stop when the user enters zero. 
// Output the sum.

// Function: function sumUntilZero()

// Input:

// Numbers ending with 0
// Output: Sum of entered numbers

// Test Cases:

// Input: 5, 3, 2, 0 → Output: 10
// Input: 1, 1, 1, 0 → Output: 3

// function sumUntilZero(){
//     let sum = 0;
//     while(true){
//         let num = Number(prompt('Enter a number (enter a 0 to stop)'))
//         if (num === 0) {
//             break;
//         }
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumUntilZero());

// ===================================================================================

// 8. Multiplication Table
// Goal: Generate a multiplication table for a given number from 1 to 10.

// Function: function multiplicationTable()

// Input:

// Number
// Output: Multiplication table

// Test Cases:

// Input: 5 → Output: 5 x 10 = 50
// Input: 3 → Output: 3 x 7 = 21

// function multiplicationTable(num) {
//     for(let i = 1; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }

// let test = prompt("Enter a number for the multiplication table to begen")
// console.log(multiplicationTable(test));


// =======================================================================


// 9. Count Digits
// Goal: Determine how many digits a number contains.

// Function: function countDigits()

// Input:

// Number
// Output: Digit count

// Test Cases:

// Input: 1234 → Output: 4
// Input: 7 → Output: 1


// function countDigits(num) {
//     let count = 0;

//     while (num > 0) {
//         count ++;
//         num = Math.floor(num / 10)
//     }

//     return count;
    
// }


// let test = Number(prompt('Enter a number to count the digits:'));
// console.log('Number of digits', countDigits(test));

// ==============================================================


// 10. Find Longest String
// Goal: Store strings in an array and find the longest string.

// Function: function longestString()

// Input:

// Array of strings
// Output: Longest string

// Test Cases:

// Input: ["cat", "elephant", "dog"] → Output: "elephant"
// Input: ["hi", "hello"] → Output: "hello"


// function longestString(arr){
//     let largest = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i].length > largest.length) {
//             largest = arr[i]
            
//         }

//     }
//     return largest
// }

// let arr1 = ["cat", "elephant", "dog"] 
// let arr2 = ["hi", "hello"]

// console.log(longestString(arr1))
// console.log(longestString(arr2))

// ==========================================================================

// 11. Reverse a Number
// Goal: Reverse the digits of a given number.

// Function: function reverseNumber()

// Input:

// Number
// Output: Reversed number

// Test Cases:

// Input: 1234 → Output: 4321
// Input: 90 → Output: 9


// function reverseNumber(num) {
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num/10);
//     }
//     return reversed
// }


// console.log(reverseNumber(1234));


// =================================================


// 12. Prime Number Check
// Goal: Determine whether a number is prime.

// Function: function isPrime()

// Input:

// Number
// Output: "Prime" or "Not Prime"

// Test Cases:

// Input: 7 → Output: "Prime"
// Input: 9 → Output: "Not Prime"

// function isPrime(num) {
//     if (num <=1) return 'Not a Prime';
//     if (num === 2) return 'Prime';
//     if (num % 2 === 0) return 'Not a Prime';

//     for(let i = 3; i <= num; i++){
//         if (num % i === 0) {
//             return "Not Prime";
//         }
//     }
//     return 'Prime';
// }


// let test = Number(prompt('Enter a number'))
// console.log(isPrime(test))

// ================================================================================================


// 13. Remove Duplicates
// Goal: Remove duplicate values from an array.

// Function: function removeDuplicates()

// Input:

// Array with duplicates
// Output: Array without duplicates

// Test Cases:

// Input: [1, 2, 2, 3, 1] → Output: [1, 2, 3]
// Input: [5, 5, 5] → Output: [5]

// function removeDuplicates(arr) {
//     return [...new Set (arr)];
    

// }
// console.log(removeDuplicates([1, 2, 2, 3, 1])); 

// ===================================================================================

// 14. Sum of Digits
// Goal: Calculate the sum of all digits in a number.

// Function: function sumOfDigits()

// Input:

// Number
// Output: Sum of digits

// Test Cases:

// Input: 345 → Output: 12
// Input: 1001 → Output: 2

// function sumOfDigits(num) {
//     let sum = 0;

//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num /10);
//     }

//     return sum;
    
// }

// console.log(sumOfDigits(345));  
// console.log(sumOfDigits(1001));   
// console.log(sumOfDigits(0));      
// console.log(sumOfDigits(999)); 

// ===================================================================

// 15. Palindrome Number Check
// Goal: Check whether a number is a palindrome.

// Function: function isPalindrome()

// Input:

// Number
// Output: "Palindrome" or "Not Palindrome"

// Test Cases:

// Input: 121 → Output: "Palindrome"
// Input: 123 → Output: "Not Palindrome"

// function reverseNumber(num) {
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num/10);
//     }
//     return reversed
// }

// let test = 56265
// console.log(reverseNumber(test));

// if (test === reverseNumber(test)) {
//     console.log('Palindrome')
    
// }else{
//     console.log('Its not Palindrome')
// }


// ==============================================================================

// 16. Armstrong Number Check
// Goal: Check if a number is an Armstrong number.

// Function: function isArmstrong()

// Input:

// Number
// Output: "Armstrong" or "Not Armstrong"

// Test Cases:

// Input: 153 → Output: "Armstrong"
// Input: 123 → Output: "Not Armstrong"

// function isArmstrong(num){

     
//     const numStr = num.toString();
//     const numDigits = numStr.length;
    
//     let sum = 0;
//     let temp = num;
    
    
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, numDigits);
//         temp = Math.floor(temp / 10);
//     }
    
   
//     return sum === num ? "Armstrong" : "Not Armstrong";
// }


// console.log(isArmstrong(153));
// console.log(isArmstrong(123));  
// console.log(isArmstrong(9));     
// console.log(isArmstrong(9474));  
// console.log(isArmstrong(370));  


// ========================================


// 17. Calculator with History
// Goal: Perform multiple calculations and store each result in an array.

// Function: function calculatorWithHistory()

// Input:

// Calculations (two numbers and operator)
// Output: Array of results

// Test Cases:

// Input: 2 + 3, 4 * 5 → Output: [5, 20]
// Input: 10 - 4, 8 / 2 → Output: [6, 4]

// function calculatorWithHistory(calculations) {
//   const history = [];

//   for (let [a, operator, b] of calculations) {
//     let result;

//     switch (operator) {
//       case '+':
//         result = a + b;
//         break;
//       case '-':
//         result = a - b;
//         break;
//       case '*':
//         result = a * b;
//         break;
//       case '/':
//         result = b !== 0 ? a / b : null;
//         break;
//       default:
//         result = null;
//     }

//     history.push(result);
//   }

//   return history;
// }


// alculatorWithHistory([
//   [2, '+', 3],
//   [4, '*', 5]
// ]);


// calculatorWithHistory([
//   [10, '-', 4],
//   [8, '/', 2]
// ]);













