"use strict";

/**
 *
 */

class Account {
    constructor(balance) {
        this.successor = null;
        this.balance = balance;
    }

    setNext(account) {
        if (!(account instanceof Account)) {
            throw new TypeError("Param must be an account");
        }
        this.successor = account;
    }

    pay(amountToPay) {
        const accountType = this.constructor.name;
        if (this.canPay(amountToPay)) {
            console.log(`Paid ${amountToPay} using ${accountType}`);
        } else if (this.successor) {
            console.log(`Cannot pay using ${accountType}. Proceeding ..`);
            this.successor.pay(amountToPay);
        } else {
            throw new Error("None of the accounts have enough balance");
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }
}

class Bank extends Account {
    constructor(balance) {
        super(balance);
    }
}

class Paypal extends Account {
    constructor(balance) {
        super(balance);
    }
}

class Bitcoin extends Account {
    constructor(balance) {
        super(balance);
    }
}

const bank = new Bank(100);
const paypal = new Paypal(200);
const bitcoin = new Bitcoin(300);

bank.setNext(paypal);
paypal.setNext(bitcoin);

bank.pay(259);