//Q3: Handling Errors in Async-Await (Try-Catch Required) 
// Modify the following function to use async-await and proper error handling (try-catch) 
// Original Code (With Promise)
{
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            success ? resolve("Data received") : reject("Error fetching data");
        }, 2000);
    }
    );
}
fetchData()
    .then(console.log)
    .catch(console.error);
}
// Rewritten Code using async-await and try-catch
{
{
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let success = Math.random() > 0.5;
                success ? resolve("Data received") : reject("Error fetching data");
            }, 2000);
        });
    }

    async function getData() {
        try {
            const result = await fetchData();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    getData();
}


}