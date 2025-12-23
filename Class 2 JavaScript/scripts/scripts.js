// Write javascript code that will get an input from the user and
// calculate which Chinese Zodiac a given year is in
// Formula for Chinese Zodiac caluclation: (year - 4) % 12.
// Possible values:

let input = prompt('Enter your birth year: ');
let year = parseInt(input,10);
let sign;
let zodiacValue;
// Number.isNaN(NaN);        // true
// Number.isNaN(5);          // false
// Number.isNaN("NaN");      // false
// Number.isNaN(undefined);  // false
// Number.isNaN(0 / 0);      // true

if(Number.isNaN(year)){
     console.log('Pleese enter a valid year.')
} else {
    zodiacValue = (year - 4) % 12;
    if (zodiacValue < 0) zodiacValue += 12; 

    if (zodiacValue === 0){
        sign = 'Rat';
    } else if (zodiacValue === 1) {
        sign = 'Ox';
    } else if (zodiacValue === 2) {
        sign ='Tiger'
    } else if (zodiacValue === 3) {
        sign = 'Rabbit';
    } else if (zodiacValue === 4) {
        sign = 'Dragon';
    } else if (zodiacValue === 5) {
        sign = 'Snake';
    } else if (zodiacValue === 6) {
        sign = 'Horse';
    } else if (zodiacValue === 7) {
        sign = 'Goat';
    } else if (zodiacValue === 8) {
        sign = 'Monkey';
    } else if (zodiacValue === 9){
        sign ='Rooster';
    } else if (zodiacValue === 10) {
        sign ='Dog';
    } else if (zodiacValue === 11) {
        sign = 'Pig';
    }

console.log(`The Chinese Zodiac sing for ${year} is: ${sign}`);
}