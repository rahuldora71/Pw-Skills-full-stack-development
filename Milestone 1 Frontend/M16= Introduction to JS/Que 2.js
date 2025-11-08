// Q2. Write a program that grades students based on their marks 
// If greater than 90 then A Grad 
// If between 70 and 90 then a B grad 
// If between 50 and 70 then a C grad 
// Below 50 then an F grade


let marks = 50; 
if(marks>90) {
    console.log("A Grade");
}else if(marks>=70 && marks<=90) {
    console.log("B Grade"); 
}
else if(marks>=50 && marks<70) {
    console.log("C Grade");
}
else {
    console.log("F Grade");
}