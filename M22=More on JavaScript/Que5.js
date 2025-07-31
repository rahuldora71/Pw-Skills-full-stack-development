// Q5: Handling Synchronous Errors with try-catch 
// Write a function that:
// a. Accepts a string input 
// b. Converts it to a number and returns its square 
// c. Uses try-catch to handle cases where the input is not a valid number 
// d. If the error occurs, return "Invalid Input" instead of crashing.

function square(a){
    try{
        const num = Number(a);
        if (isNaN(num)) {
            throw new Error("Invalid Input");
        }
        return num * num;
    }
    catch (error) {
        return error.message;
    }

}
console.log(square(5)); // Output: 25
console.log(square("abc")); // Output: "Invalid Input"
 