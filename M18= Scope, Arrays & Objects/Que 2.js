// 2. The following is an array of 10 students ages: 
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ]

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];


// Sort the array and find the min and max age 

// Custom sort function to sort the array in ascending or descending order
function sortArray(arr, order = true) {
    // order = true for ascending, false for descending
    for (let i = 0; i < arr.length - 1; i++) {
        for(let j= i+1; j < arr.length; j++) {

            if (order ? arr[i] > arr[j] : arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
       
    }
}

// Inbuilt sort function to sort the array in ascending order

ages.sort(function (a, b) { return a - b; });
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Sorted Ages: "+ages);
console.log("Min Age: "+minAge);
console.log("Max Age: "+maxAge);





// Find the median age(one middle item or two middle items divided by two) 
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}
console.log("Median Age: " + medianAge);




// Find the average age(all items divided by number of items  )
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
const averageAge = sum / ages.length;
console.log("Average Age: " + averageAge);





// Find the range of the ages(max minus min)
const ageRange = maxAge - minAge;
console.log("Age Range: " + ageRange);





//  Compare the value of (min - average) and (max - average), use abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log("Difference between Min and Average: " + minDiff);
console.log("Difference between Max and Average: " + maxDiff);


