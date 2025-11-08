// Chaining Promises with setTimeout 
// Modify the delay function to chain multiple promises so that three messages are logged in sequence with  delays

function delay(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log(message);
            resolve(message);
        }, time);
    });
}

// Chaining the promises to log messages in sequence
delay("First",1000).then((data)=> {
    console.log(data," message logged after 1 second");
    return delay("Second", 2000);
     })
.then((data) => {   
    console.log(data," message logged after 2 seconds");
    return delay("Third", 3000);
})
.then((data) => {
    console.log(data," message logged after 3 seconds");
})
.catch((error) => {
    console.error("Error:", error);
});
    