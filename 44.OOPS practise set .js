// Create a BankAccount Class with Deposit and Withdrawal Methods: Define a BankAccount class with a balance property and methods deposit(amount) and withdraw(amount).Ensure that withdraw doesn’t allow withdrawals greater than the balance.

let username;
let email;

class user {
    constructor(username, email) {
        this.email = email;
        this.username = username;
    }
}
class admin extends user {
    constructor(username, email, previlegies) {
        super(username, email)
        this.previlegies = previlegies;
    }
    userprevilegies() {

        this.previlegies.forEach(previlegies => {
            console.log(`the admin can ${previlegies}  `);

        });
    }
}
username = prompt("Enter the user name:");
email = prompt("Enter the emailaddress");

let admin_control = new admin(username, email, ["add a user ", "delete  a post "]);
console.log(`${username} with email adress ${email} admin have following previllages`);
admin_control.userprevilegies();  // Correctly call the method here