// Problem 4 
// Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand], Model: [model]". 
// Test the method using this keyword


const car = {   
    brand: "Mahindra",
    model: " XUV700"
    ,
    displayDetails: function() {
        console.log("Brand:", this.brand, ", Model:", this.model);
    }
};

// Example usage:
car.displayDetails(); // Output: Brand: Mahindra , Model:  XUV700