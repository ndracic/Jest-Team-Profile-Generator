const Manager = require("../lib/manager");

describe('manager object', () => {
    const manager = new Manager("Nermin", 1, 'nermin.dracic@gmail.com', 4);
    expect(manager.name).toBe('Nermin');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('nermin.dracic@gmail.com');
    expect(manager.officeNum).toEqual(expect.any(Number));
})
test("managers office test", () => {
    const manager = new Manager('Nermin', 1, 'nermin.dracic@gmail.com', 4);
    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
  
});

test("Role Test", () => {
    const manager = new Manager('Nermin', 1, 'nermin.dracic@gmail.com', 4);
    expect(manager.getRole()).toBe('Manager');
  }); 