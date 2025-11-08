//  Building a Student Management System

const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" }, 
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" }, 
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }, 
    // Add more students as needed
    ];


    // a. Add a Student: Create a function to add a new student to the array.

function addStudent(id, firstName, lastName, age, grade) {
    const newStudent = { id, firstName, lastName, age, grade };
    students.push(newStudent);
    console.log('Added student: '+firstName+" "+lastName);
}

// b. Update Student Information: Create a function to update a student's information based on their id.

function updateStudent(id, firstName, lastName, age, grade){
    const student = students.find(function(student) {
  return student.id === id;
});
    if (student) {
        student.firstName = firstName;
        student.lastName = lastName;
        student.age = age;
        student.grade = grade;
        console.log('Updated student: '+firstName+" "+lastName);
    } else {
        console.log('Student not found');
    }
}


// c. Delete a Student: Create a function to delete a student based on their id.
function deleteStudent(id) {
    const index = students.findIndex(function(student) {
        return student.id === id;
    });
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        console.log('Deleted student: ' + deletedStudent[0].firstName + " " + deletedStudent[0].lastName);
    } else {
        console.log('Student not found');
    }
}

// d. List All Students: Create a function to display a list of all students

function listStudents() {
    console.log("List of Students:");
    students.forEach(function(student) {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade: Create a function to find all students who have a specific grade.
function findStudentsByGrade(grade) {
    const matchStudents = students.filter(function(student) {
        return student.grade === grade;
    });
    return matchStudents;
}


// f. Calculate Average Age: Create a function to calculate the average age of all students using array method.

function calculateAverageAge() {
    const totalAge = students.reduce(function(sum, student) {
        return sum + student.age;
    }, 0);
    return totalAge / students.length;
}






