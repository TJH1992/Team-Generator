// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Empolyee = require("./Employee");

class Engineer extends Empolyee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;