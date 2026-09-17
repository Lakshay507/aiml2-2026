// Create a class BankAccount with accountNo, holderName, and balance. Use a constructor to initialize the account.
//  Provide instance methods deposit(amount), withdraw(amount), and displayBalance().
//   Withdrawal should not be allowed when the requested amount is greater than the available balance.
//    Create a static method bankInfo() that displays the bank name and general banking information. 
//    Create two account objects and perform different transactions on them.
// Concepts Covered: Constructor, Objects, Instance Methods, Static Method, Object State

class BankAccount {
    constructor(accountNo,holderName,balance){
        this.accountNo=accountNo;
        this.holderName=holderName;
        this.balance=balance;

    }
    deposit(amount){
        this.balance+=amount;

    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("out of balance");

        }
        else{
            this.balance-=amount;

        }


    }
    static bankInfo(){
        console.log("bank name : HDFC");
        console.log("location : delhi");
        
    }
    
    displayBalance(){cleaer
        
        console.log("account no :"+this.accountNo);
        console.log("holder name :"+this.holderName);
        console.log("balance :"+this.balance);
        BankAccount.bankInfo();
    }
    
    
}
let a=new BankAccount(101,"vikas",1000);
let b=new BankAccount(102,"lakshay",200000000);
a.deposit(1000);
a.withdraw(2000);
a.displayBalance();
b.deposit(100000);
b.withdraw(1000);
b.displayBalance();