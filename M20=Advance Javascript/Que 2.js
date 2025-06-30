// Problem 2 
// Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.


 const contacts = new Map();
function addContact(name, age, email, location) {
    contacts.set(name, { age, email, location });
}

function getContact(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return "Contact not found";
    }
}


