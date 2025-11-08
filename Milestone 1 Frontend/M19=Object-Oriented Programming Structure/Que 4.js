// TASK 4 
// Problem Statement 4: Implement Task 1 using Class.
// Design a JavaScript class called Person with properties for name and age. 
// Implement a method to display the person's name and age. 
// Then, create instances of Person and display their information.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Creating instances of Person
const person1 = new Person("Ram", 30);  
const person2 = new Person("Shyam", 25);

// Displaying information for each person
person1.displayInfo();  
person2.displayInfo();