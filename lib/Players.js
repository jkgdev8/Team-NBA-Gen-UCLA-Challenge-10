const Employee = require("./Employee");

class Players extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Players";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Players;