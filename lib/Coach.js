const Employee = require("./Employee");

class Coach extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Coach";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Coach;