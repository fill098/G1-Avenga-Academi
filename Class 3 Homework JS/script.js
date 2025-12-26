// 1️⃣ minutesToSeconds(minutes)
// What to do
// Convert minutes into seconds.

// Input must be a number
// Negative values return null
// 0 minutes returns 0
// Expected Outputs
// minutesToSeconds(5)    → 300
// minutesToSeconds(0)    → 0
// minutesToSeconds(-2)   → null
// minutesToSeconds("5")  → null


function minutesToSeconds(minutes) {

    if (typeof minutes !== 'number') {
        return null;   
    }


    if (minutes < 0) {
        return null;
    }
    
    return minutes * 60;
}

let result = minutesToSeconds(2)
console.log(result)


// 2️⃣ hoursToMinutes(hours)
// What to do
// Convert hours into minutes.

// Input must be a number
// Negative values return null
// Expected Outputs
// hoursToMinutes(2)    → 120
// hoursToMinutes(0)    → 0
// hoursToMinutes(-1)   → null
// hoursToMinutes("2")  → null


function hoursToMinutes(hours) {

    if (typeof hours !== 'number') {
        return null;   
    }


    if (hours < 0) {
        return null;
    }
    
    return hours * 60;
}

let result1 = hoursToMinutes('number')
console.log(result1)


// 3️⃣ hoursToSeconds(hours)
// What to do
// Convert hours into seconds.

// Validate input
// Return null if invalid
// Expected Outputs
// hoursToSeconds(1)    → 3600
// hoursToSeconds(0)    → 0
// hoursToSeconds(-1)   → null
// hoursToSeconds("1")  → null


function hoursToSeconds(hours) {

    if (typeof hours !== 'number') {
        return null;   
    }


    if (hours < 0) {
        return null;
    }
    
    return hours * 3600;
}

let result2 = hoursToSeconds(1)
console.log(result2)


// 4️⃣ daysToHours(days)
// What to do
// Convert days into hours.

// Input must be a number
// Negative values return null
// Expected Outputs
// daysToHours(1)    → 24
// daysToHours(0)    → 0
// daysToHours(-1)   → null
// daysToHours("1")  → null

function daysToHours(days) {

    if ( typeof days !== 'number') {
        return null;
        
    }

    if(days < 0){

        return null
    }
    
    else {
        return days * 24;
    }
    
}

// let result3 = daysToHours(3)

// console.log(result3)


// 5️⃣ daysToSeconds(days)
// What to do
// Convert days into seconds.

// Validate input
// Return null if invalid
// Expected Outputs
// daysToSeconds(1)    → 86400
// daysToSeconds(0)    → 0
// daysToSeconds(-1)   → null
// daysToSeconds("1")  → null


function daysToHours(days) {

    if (typeof days !== 'number') {
        return null;
        
    }

    if(days < 0){
        return null;
    }
    return days * 86400;
}

let result4 =daysToHours(1)
console.log(result4)


// 6️⃣ isTruthyValue(value)
// What to do
// Check whether a value is truthy or falsy.

// Return true if truthy
// Return false if falsy
// Expected Outputs
// isTruthyValue(1)     → true
// isTruthyValue(0)     → false
// isTruthyValue("hi")  → true
// isTruthyValue("")    → false

function isTruthyValue(value) {

    if (value) {
        return true;
        
    }
    return false;
    
}

let result5 = isTruthyValue()
console.log(result5)


// areBothTruthy(a, b)
// What to do
// Check if both values are truthy.

// Expected Outputs
// areBothTruthy(1, "a")   → true
// areBothTruthy(1, 0)     → false
// areBothTruthy("", "a")  → false
// areBothTruthy(true, 1)  → true


function areBothTruthy(value1, value2) {

    if (value1 && value2) {
        return true;
        
    }
    return false;
}

let result6 = areBothTruthy(true,'a')
console.log(result6)


// 8️⃣ getStringLength(text)
// What to do
// Return the length of a string.

// Empty string returns 0
// Invalid input returns null
// Expected Outputs
// getStringLength("hello")  → 5
// getStringLength("")       → 0
// getStringLength("a")      → 1
// getStringLength(5)        → null

function getStringLength(string) {

    if (typeof string !== 'string') {
        return null;
    }
    return string.length;
    
}

let result7 = getStringLength('jkhasdfbghvfaskjhaasdfjkbgh')
console.log(result7)

// getFirstAndLastChar(text)
// What to do
// Return the first and last character together.

// Input must be a string
// Strings shorter than 2 characters return null
// Expected Outputs
// getFirstAndLastChar("hello")  → "ho"
// getFirstAndLastChar("ab")     → "ab"
// getFirstAndLastChar("a")      → null
// getFirstAndLastChar(5)        → null

function getFirstAndLastChar(string) {
    
    if (typeof string !== 'string' || string.length === 0) {
        return null;
    }

    return string[0] + string[string.length - 1]
}

let result8 = getFirstAndLastChar('Matej')
console.log(result8)


// capitalizeIfLong(text)
// What to do
// Capitalize the first letter only if the string has 5 or more characters.

// Expected Outputs
// capitalizeIfLong("hello")  → "Hello"
// capitalizeIfLong("world")  → "World"
// capitalizeIfLong("hi")     → "hi"
// capitalizeIfLong(5)        → null

function capitalizeIfLong(long) {
    if (typeof long !== 'string' ) {
        return null;
    }
    
    if (long.length < 5) {
        return long;
        
    }
    return long[0].toUpperCase() + long.slice(1)
}

let result9 = capitalizeIfLong('marti')
console.log(result9)


// 1️⃣1️⃣ isVowel(char)
// What to do
// Check if a single character is a vowel (a, e, i, o, u).

// Ignore letter case
// Expected Outputs
// isVowel("a")  → true
// isVowel("E")  → true
// isVowel("b")  → false
// isVowel("ab") → false

function isVowel(char) {
debugger
   if (typeof char !== 'string' || char.length !== 1) {
    return false;
    
   }

   char = char.toLowerCase()
   return 'a,e,i,o,u'.includes(char)
}

let result10 = isVowel('U')
console.log(result10)