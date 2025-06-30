// Problem 5 
// Create two objects person1 and person2 with properties name and age. 
// Create a function “introduce” that prints "Hello, I'm [name], and I'm [age] years old." 
// Use the call method to make person2 introduce itself using the introduce function.


const person1 = {
    name: "Manoj",
    age: 30};
const person2 = {
    name: "Ravi",
    age: 25};

function introduce() {
    console.log("Hello, I'm " + this.name + ", and I'm " + this.age + " years old.");
}

// Using the call method to make person2 introduce itself
introduce.call(person2); // Output: Hello, I'm Ravi, and I'm 25 years