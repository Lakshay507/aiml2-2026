// User-defined JavaScript object: bankAccount
const bankAccount = {
    accountHolderName: "John Doe",
    accountNumber: 123456789,
    accountBalance: 5000,

    deposit: function(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Deposited: $" + amount);
        } else {
            console.log("Deposit amount must be greater than 0.");
        }
    },

    withdraw: function(amount) {
        if (amount > this.accountBalance) {
            console.log("Insufficient Balance");
        } else {
            this.accountBalance -= amount;
            console.log("Withdrawn: $" + amount);
        }
    },

    displayBalance: function() {
        console.log("Current Balance: $" + this.accountBalance);
    }
};

// Example usage
bankAccount.deposit(2000);
bankAccount.withdraw(3000);
bankAccount.displayBalance();

bankAccount.withdraw(8000); // Should print: Insufficient Balance
