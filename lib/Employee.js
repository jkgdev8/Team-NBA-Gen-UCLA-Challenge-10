class Employee {
    constructor (name, id, email, contract) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.contract = contract;
    }
    getName() {
        return this.name;
    }
    getContract() {
        return this.contract
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;