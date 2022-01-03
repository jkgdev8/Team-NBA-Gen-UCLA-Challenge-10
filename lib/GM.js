const Employee = require ("./Employee");

class GM extends Employee {
    constructor (name, id, email, contract) {
        super (name, id, email);
        this.contract = contract;
    }
    getRole() {
        return "GM";
    }
    getcontract() {
        return this.contract;
    }
}

module.exports = GM;