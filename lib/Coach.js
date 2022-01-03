const Employee = require("./Employee");

class Coach extends Employee {
    constructor (name, id, email, contract) {
        super(name, id, email);
        this.contract = contract;
    }
    getRole() {
        return "Coach";
    }
    getContract() {
        return this.contract;
    }
}

module.exports = Coach;