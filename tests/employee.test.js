const Employee = require("../lib/employee");

describe('makes a Employee object', () => {
  const employee = new Employee('nermin', 2, 'nermin@gmail.com');
  expect(employee.name).toBe('nermin');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('nermin@gmail.com');

})

test("Test name", () => {
    const employee = new Employee('nermin', 2, 'nermin.dracic@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("Test role", () => {
    const employee = new Employee('nermin', 2, 'nermin.dracic@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));

});

test("Test school", () => {
    const employee = new Employee('nermin', 2, 'nermin.dracic@gmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
  
});

test("Test role", () => {
    const employee = new Employee('nermin', 2, 'nermin.dracic@gmail.com');
    expect(employee.getRole()).toBe('Employee');
  }); 