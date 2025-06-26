//TASK 3 
// Problem Statement 3: Create a Constructor for a Book 
// Design a constructor function called Book that takes title and author as parameters. 
// Add a method to the prototype of the Book that displays the book's information. 
// Create at least two book instances and display their information.

function Book(title, author) {
    this.title = title;
    this.author = author;
}
Book.prototype.displayInfo = function() {
    console.log("Title: " + this.title + ", Author: " + this.author);
};

var book1=new Book("The story of my experiments with truth", "Mohandas Karamchand Gandhi");
var book2=new Book("The God of Small Things", "Arundhati Roy");


book1.displayInfo();
book2.displayInfo();