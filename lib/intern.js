const Employee = require('./employee')

// Constructor for Inter that extends from Employee
// adds school, role returns intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }

}

module.exports = Intern;