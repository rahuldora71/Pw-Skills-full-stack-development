// Q4. Generate numbers between any 2 given numbers.

const num1 = 10;
const num2 = 25;

let numbers = [];

for (let i = num1; i <= num2; i++) {
    numbers.push(i);
}
console.log("Generated numbers between " + num1 + " and " + num2 + ": " + numbers);