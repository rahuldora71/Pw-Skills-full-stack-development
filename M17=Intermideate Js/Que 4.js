// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. 
// Use a closure to handle different tax rates based on income ranges. 
// Test the function with various incomes.


// Pass the tax rates in percentage
function calculateTax(income) {
  if (income < 10000) {
    return function() {
      return income * 0.1; // 10% tax
    };
  }  else if (income < 50000) {
    return function() {
      return income * 0.2; // 20% tax
    };
  } else if (income < 100000) {
    return function() {
      return income * 0.3; // 30% tax
    };
  } else {
    return function() {
      return income * 0.4; // 40% tax
    };
  }
}

// Test the function with various incomes
console.log(calculateTax(8000)); // 800
console.log(calculateTax(30000)); // 6000
console.log(calculateTax(70000)); // 21000
console.log(calculateTax(150000)); // 60000





