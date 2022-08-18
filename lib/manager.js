const Employee = require('./employee')

// Constructor for Manager that extends from Employee
// add office number, role returns manager
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  
  getOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return 'Manager';
  }

};

module.exports = Manager;