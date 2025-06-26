// TASK 5 
// Problem Statement 5: Implement a Calculator Class 
// Create a class called Calculator that initializes two values value1 and value2 to store numbers. 
// Add methods for add, subtract, multiply, and divide. Perform and show operations.

class Calculator {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    add() {
        return this.value1 + this.value2;
    }

    subtract() {
        return this.value1 - this.value2;
    }

    multiply() {
        return this.value1 * this.value2;
    }

    divide() {
        if (this.value2 !== 0) {
            return this.value1 / this.value2;
        } else {
            return "Cannot divide by zero";
        }
    }
}

const calc = new Calculator();
calc.value1 = 10;
calc.value2 = 5;

console.log("Addition: " + calc.add());          // Output: 15
console.log("Subtraction: " + calc.subtract());  // Output: 5
console.log("Multiplication: " + calc.multiply()); // Output: 50
console.log("Division: " + calc.divide());        // Output: 2