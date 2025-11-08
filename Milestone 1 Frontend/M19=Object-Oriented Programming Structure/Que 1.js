// TASK 1 
// Problem Statement 1: 
// Create a Constructor for a Person Write a JavaScript function constructor named Person that takes two parameters, name, and age, and 
// Add a method to the prototype to display name and age. Then, create two instances of Person and display their names and ages

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.displayInfo = function() { //Adding a method to the prototype
    console.log("Name: " + this.name + ", Age: " + this.age);
};

var person1 = new Person("Ram", 30);
var person2 = new Person("Shyam", 25);

person1.displayInfo();
person2.displayInfo();

