 
// 1.  Demonstrate JavaScript's Single-Threaded Nature
//     Question: 
//     Write an example to show that JavaScript is single-threaded by creating two competing tasks, 
//     one that blocks the event loop and another async function that waits for a promise


function blockingTask() {
    for (let i = 0; i < 1000000000; i++) {
    }
    console.log("Blocking task completed");
}
blockingTask();

function asyncTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async task completed");
        }, 1000);
    });
}


asyncTask()
.then((data) => {
    console.log(data);
    })
.catch((error) => {
    console.error("Error in async task:", error);
});




