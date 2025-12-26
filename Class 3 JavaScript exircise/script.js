// function getFullName(firstName, lastName) {
//     if (firstName && lastName) {
//         return firstName + ' ' + lastName;
//     }
//     return 'N/A';
// }

// let fullName = getFullName('Filip', 'Mihajlovski')
// console.log(fullName)
// let fullName1 = getFullName('', '')
// console.log(fullName1)



// function getDayByNumber(day){
//     switch (day) {
//         case 1: 
//             return 'Monday';
//         case 2:
//             return 'Tusday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         case 7:
//             return 'Sunday';
        
//         default: 'Not a valid day'
//     }


// }


// console.log(getDayByNumber(8));

function logDataInConsole(data, type = 'info', color = 'blue') {
    console.log(`${type} ${color} ${data}`);
}

// logDataInConsole('Hello world');
// logDataInConsole('Hello AA', 'warning', 'red');
// logDataInConsole('Outside is raining', 'error');


// function simpleCalculator(num1, num2, operator){
//     let result = 0;
//     switch(operator){
//         case '+':
//         result = num1 + num2;
//         break;
//         case '-':
//         result = num1 - num2;
//         break;
//         case '*':
//         result = num1 + num2;
//         break;
//         case '/':
//         result = num1 + num2;
//         break;
//         default:
//             return; -Infinity;
//     }
//     return result;
// }


// let a = prompt('')
// let b = prompt('')
// // let c = prompt('')
// console.log(simpleCalculator(a, b, '+'))

function sumNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

function substracNumbers(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiplyNumbers(num1, num2) {
    let result = num1 * num2;
    return result;
}
function divideNumbers(num1, num2) {
    let result = num1 / num2;
    return result;
}
function modolusNumbers(num1, num2) {
    let result = num1 % num2;
    return result;
}


function simpleCalculator(num1, num2, operator) {
    let result = 0;
    switch(operator){
        case '+':
            result = sumNumbers(num1, num2);
            break;
        case '-':
            result = substracNumbers(num1, num2);
            break;
        case '*':
            result = multiplyNumbers(num1, num2);
            break;
        case '/':
            result = divideNumbers(num1, num2);
            break;
        case '%':
            result = modolusNumbers(num1, num2);
            break;
        default:
            return -Infinity;
        
    }
    return result;
}


function isOperatorValid(operator){
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
        default:
            return false;
    }
}

function getNumberFromPromt(message) {
    let input = prompt(message);
    let paresdInput = parseInt(input);
    if (isNumberValid(paresdInput)) {
        return paresdInput;

    }
    return null;
}

// Number.isNaN(NaN);        // true
// Number.isNaN(5);          // false
// Number.isNaN("NaN");      // false
// Number.isNaN(undefined);  // false
// Number.isNaN(0 / 0);      // true

function isNumberValid(number) {
    if (!Number.isNaN(number)) {
        return true;
    }
}




let firstNumber = getNumberFromPromt('Enter first number:')
let secondNumber = getNumberFromPromt('Enter second number:')


if (firstNumber && secondNumber) {
    let operator = prompt('Enter an operator(+,-,*,/,%): ')
    if (isOperatorValid(operator)) {
        let result = simpleCalculator(firstNumber, secondNumber, operator)
        logDataInConsole(result, 'Result is', ' :')
        
    }
}


