// Q2: Convert Traditional Functions to Arrow Functions 
// Rewrite the following function using arrow functions without changing the behavior:
// Original Code:
{
function multiply(a, b) {
    return a * b;
}

const obj ={
    value:10,
    add: function(num) {
        return this.value + num;
    }
};
console.log(multiply(5, 3)); // Output: 15
console.log(obj.add(5)); // Output: 15
}

//Rewritten Code:
{
const multiply = (a, b) => a * b;

const obj = {
    value: 10,
    add: (num) => this.value + num // Note: This will not work as expected due to lexical `this`
};


console.log(multiply(5, 3)); // Output: 15
console.log(obj.add(5)); // Output: NaN 

}
