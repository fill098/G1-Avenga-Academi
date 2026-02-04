let numberPerPhone = 30;
let pricePerPhone = 119.95;
let taxRate = 0.05;


let priceWithNoTax = pricePerPhone * numberPerPhone;
let totalTax = priceWithNoTax * taxRate;
let totalCost = priceWithNoTax + totalTax;

console.log('Price with no tax: $' + priceWithNoTax.toFixed(2))
console.log('Total Tax: $' + totalTax.toFixed(2))
console.log('Total Cost: $' + totalCost.toFixed(2))
