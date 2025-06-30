// Problem 1 
// Create a Map in JavaScript and perform the following operations 
// Add key-value pairs to the Map.
// Check if a specific key exists.
// Retrieve the value associated with a given key.
// Iterate through all key-value pairs.



const m=new Map();
// Adding key-value pairs to the Map
m.set('name', 'Rahul');
m.set('age', 23);
m.set('city', 'Haryana');



// Check if a specific key exists
console.log(m.has('name')); // true
console.log(m.has('country')); // false\


// Retrieve the value associated with a given key
console.log(m.get('name')); // Rahul
console.log(m.get('age')); // 23



// Iterate through all key-value pairs
for (const [key, value] of m) {
    console.log(key, value);
}