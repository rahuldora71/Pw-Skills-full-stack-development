// Q1: Understanding Arrow Functions & Lexical this 
// Consider the following code and predict the output. Explain why the behavior occurs.


const person={
    name: "Alice",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
}
person.greet();


// Output: "Hello, my name is Alice"
// Explanation:
// The output is "Hello, my name is Alice" because of the way arrow functions handle the `this` context.
// In the `greet` method, `this` refers to the `person` object

