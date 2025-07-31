// Q4: Async Function with Multiple Await Calls
// Write an async function that:
// a. Fetches user data after 1 second.
// b. Fetches order details after 2 seconds.
// c. Fetches payment status after 3 seconds.
// d. Logs the final "Order completed" message.
// e. Use await to ensure each step executes sequentially


async function completeOrder() {

    function fetchUserData(){
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("User data fetched");
                resolve();            
            }, 1000);
        });
    }

    function fetchOrderDetails(){
        return new Promise(resolve=>{
            setTimeout(()=>{

           
            console.log("Order Details Fatched");
            resolve();
             }
            ,2000);
        })
    }

    function fetchPaymentStatus(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                console.log("Payment Details is fatched");
                resolve();
                
            },3000)
        });
    }


    await fetchUserData()
    await fetchOrderDetails()
    await fetchPaymentStatus()

    console.log("You have successfully completed your Order");

    
    
}

completeOrder();