// Problem 3
//  You are given an array of numbers named myArray. 
// Create a function that takes any number of arguments and adds them to the existing array. Use the spread and rest operator

const myArray = [1, 2, 3, 4, 5];
function addToArray(...args) {
    myArray.push(...args);
}
// Example usage:

addToArray(6, 7, 8);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]