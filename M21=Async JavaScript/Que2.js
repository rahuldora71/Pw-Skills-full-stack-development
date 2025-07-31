// 2. Why Does JavaScript Not Execute Asynchronously by Default? 
// Question: 
//  JavaScript is often called synchronous and single-threaded, yet it handles asynchronous tasks like AJAX requests, timers, and event listeners 
// a. Explain why JavaScript does not execute asynchronously by default 

//  Ans. it is designed to be synchronous and single-threaded to maintain simplicity and predictability in code execution.
//       it avoid the complexity in managing multipal threads and ths is why Js does not execute asynchronously by default.


// b. Write a code snippet to prove that JavaScript is inherently synchronous.

function synchronousTask() {
    console.log("Synchronous task started");
    for (let i = 0; i < 1000000000; i++) {
        // Simulating a blocking operation
    }
    console.log("Synchronous task completed");
}

console.log("Script start here ");
synchronousTask();// it takes time to complete but javascript will not execute any other code until this task is completed
console.log("Script end here ");