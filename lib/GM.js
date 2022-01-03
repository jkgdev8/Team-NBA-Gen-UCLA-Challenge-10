const Employee = require ("./Employee");

class GM extends Employee {
    constructor (name, id, email, yearsleft) {
        super (name, id, email);
        this.yearsleft = yearsleft;
    }
    getRole() {
        return "GM";
    }
    getyearsleft() {
        return this.yearsleft;
    }
}

module.exports = GM;