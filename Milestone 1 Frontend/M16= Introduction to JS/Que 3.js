// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and examples.

// Loops allow us to execute a block of code repeatedly as long as a specified condition is true.
// Loops helps in reducing code redundancy and automating repetitive tasks.
// There are several types of loops in JavaScript, including for, while, and do-while loops.

// 1. For Loop
// The for loop is used when the number of iterations is known beforehand. 
// It consists of three parts: initialization, condition, and increment/decrement.

// Syntax:
// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// 2. While Loop
// The while loop is used when the number of iterations is not known beforehand. 
// It continues to execute as long as the specified condition is true.

// Syntax:
// while (condition) {
//     // Code to be executed
// }

let j = 0;

while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// 3. Do-While Loop
// The do-while loop is similar to the while loop, 
// but it guarantees that the code block will be executed at least once, even if the condition is false.


// Syntax:

// do {
//     // Code to be executed
// } while (condition);

let k = 0;
do {
    console.log("Do-While Loop iteration: " + k);
    k++;
}
while (k < 5);