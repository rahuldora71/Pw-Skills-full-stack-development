// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.

const ascnum = [];

const descnum = [];



let i = 1;
// While loop for ascending order

while (i <= 25) {
    ascnum.push(i);
    i++;
}   
console.log("Ascending order: " + ascnum.join(", "));

i = 25;

// While loop for descending order

while (i >= 1) {
    descnum.push(i);
    i--;
}
console.log("Descending order: " + descnum.join(", "));