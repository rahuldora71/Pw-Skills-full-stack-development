// TASK 2 
// Problem Statement 2: Implement a Bank Account 
// Create a constructor function named BankAccount that initializes a bank account with an initial balance. 
// Include methods for depositing and withdrawing money from the account. 
// Write code to demonstrate these operations on a bank account object

function BankAccount(initialBalance) {
    this.balance = initialBalance;
}
// Adding methods to the prototype for deposit, withdraw, and getBalance
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;

        console.log("Deposited: " + amount);

    } else {
        console.log("Deposit amount must be positive.");
    }
};
BankAccount.prototype.withdraw = function(amount) {

    if (amount > 0 && amount <= this.balance) {

        this.balance -= amount;

        console.log("Withdrew: " + amount);
    } else if (amount > this.balance) {

        console.log("Insufficient funds for withdrawal.");

    } else {

        console.log("Withdrawal amount must be positive.");

    }
};

BankAccount.prototype.getBalance = function() {
    return this.balance;    
}

// Create a new bank account object With an initial balance 1000
var myAccount = new BankAccount(1000);

// deposit and withdrawal
myAccount.deposit(500);
console.log("Current Balance: " + myAccount.getBalance());

myAccount.withdraw(200);
console.log("Current Balance: " + myAccount.getBalance());

myAccount.withdraw(1500);
myAccount.deposit(5000)
console.log("Current Balance: " + myAccount.getBalance());