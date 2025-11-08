// TASK 7
// Problem Statement 7: Implement a Library System 
// Create a class called Library that can manage a collection of books. 
// Each book should be represented as an instance of a Book class (with properties like title, author, and availability). 
// Implement methods in the Library class to add books, check out books, and return books. 
// Keep track of the books available.

class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
    }

    checkOutBook(title) {
        const book = this.books.find(b => b.title === title && b.isAvailable);
        if (book) {
            book.isAvailable = false;
            return "You have checked out "+book.title+" by "+book.author;
        } else {
            return "Sorry, the book is not available.";
        }
    }

    returnBook(title) {
        const book = this.books.find(b => b.title === title && !b.isAvailable);
        if (book) {
            book.isAvailable = true;
            return "You have returned "+book.title+" by "+book.author;
        } else {
            return "Sorry, this book was not checked out.";
        }
    }
    
}
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true; // Initially, the book is available
    }
}

const lib=new Library();

// Add Books
lib.addBook("The God of Small Things", "Arundhati Roy");
lib.addBook("Midnight's Children", "Salman Rushdie");
lib.addBook("The White Tiger", "Aravind Adiga");
lib.addBook("The Inheritance of Loss", "Kiran Desai");
lib.addBook("A Fine Balance", "Rohinton Mistry");


// Check Out Books
console.log(lib.checkOutBook("The God of Small Things")); 
console.log(lib.checkOutBook("Midnight's Children"));

// Return Books
console.log(lib.returnBook("The God of Small Things"));

