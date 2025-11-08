// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. 
// The curried function should accept arguments one at a time and return a new function until all arguments are provided.
// Then, it should execute the original function with all arguments. 
// Test the curry function with a function that adds two numbers.

function curry(fn) {
   return function curried(...args) {
       if (args.length === fn.length) {
           return fn(...args);
       }
       return function(...args2) {
           return curried(...args, ...args2);
       };
   };
}

// Example function to be curried
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Output: 5

