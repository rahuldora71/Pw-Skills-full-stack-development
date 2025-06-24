// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion.
//  Test the function with different inputs.

//Factorial
function factorial(n) {
    if (n < 0) {
       return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(4)); // Output: 120
console.log(factorial(5)); // Output: 720
console.log(factorial(6)); // Output: 720   
console.log(factorial(-16)); // Output: 720   

