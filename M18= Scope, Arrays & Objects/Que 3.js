// Que 3. Object Extensibility and Sealing
// a) Use the Object.preventExtensions method to prevent any further additions Of properties to the student object.
const student = {
    name: 'Rahul Dora',
    age: 23,
    grade: 'A',
    blood: 'O+'
};

Object.preventExtensions(student);
console.log(student);
student.subject = 'Physics'; // This will not work as the object is prevented from extensions
console.log(student);



// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable called extensibleStatus.
const extensibleStatus = Object.isExtensible(student);


// c) Create a new object called teacher with a 'subject' property set to 'Math'.
const teacher = {
    name: 'Mukesh kumar',
    age: 35,
    subject: 'Math'
};


// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions Of properties.
Object.seal(teacher);




// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called sealedStatus.
const sealedStatus = Object.isSealed(teacher);




// f) Print the extensibleStatus and sealedStatus to the console.
console.log('Is student object extensible? ', extensibleStatus);
console.log('Is teacher object sealed? ', sealedStatus);
