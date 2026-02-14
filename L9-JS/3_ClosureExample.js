function createAccount(name, college) {
    let balance = 0;

    function deposit(amt) {
        balance += amt;
    }

    function credit(amt) {
        if (balance >= amt) {
            balance -= amt;
        }
        else {
            throw new Error("Insufficient Balance");
        }
    }

    function checkBalance() {
        return balance;
    }

    function details() {
        console.log("-----------------")
        console.log("Name", name)
        console.log("College", college)
        console.log("Balance", balance)
        console.log("-----------------")
    }

    return {
        "credit": credit,
        "deposit": deposit,
        checkBalance,
        details
    }
}

let tarunAccount =
    createAccount("Tarun", "DTU");
let rhythmAccount =
    createAccount("Rhythm", "MSIT");

tarunAccount.deposit(1000);
tarunAccount.details();

rhythmAccount.details();
rhythmAccount.credit(100);