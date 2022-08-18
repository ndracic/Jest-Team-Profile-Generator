const Manager = require("../lib/manager");

describe('manager object', () => {
    const manager = new Manager("Nermin", 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(manager.name).tobe('Nermin');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).tobe('nermin.dracic@gmail.com');
    expect(manager.officeNum).tobe(expect.any(Number))
})
test("managers office test", () => {
    const manager = new Manager('Nermin', 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
  
});

test("Role Test", () => {
    const manager = new Manager('Nermin', 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(manager.getRole()).toBe('Manager');
  }); 