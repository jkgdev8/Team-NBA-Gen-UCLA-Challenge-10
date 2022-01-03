const Employee = require("./Employee");

class Players extends Employee {
    constructor (name, id, email, position, contract) {
        super (name, id, email);
        this.position = position;
        this.contract = contract;
        
        
    }
    getRole() {
        return "Players";
    }
    getPosition() {
        return this.position;
        
    }
    getContract() {
        return this.contract;
    }
    
    
}

module.exports = Players;