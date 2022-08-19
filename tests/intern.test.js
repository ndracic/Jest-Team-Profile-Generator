const Intern = require ("../lib/Intern");

describe('Intern object', () => {
    const intern = new Intern("Nermin", 5, 'nermin.dracic@gmail.com', 'UIC');
    expect(intern.name).toBe('Nermin');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('nermin.dracic@gmail.com');
    expect(intern.school).toBe('UIC');
})
test("Intern's school test", () => {
    const intern = new Intern('Nermin', 5, 'nermin.dracic@gmail.com', 'UIC');
    expect(intern.getSchool()).toEqual(expect.any(String));
  
});

test("Role Test", () => {
    const intern = new Intern('Nermin', 5, 'nermin.dracic@gmail.com', 'UIC');
    expect(intern.getRole()).toBe('Intern');
  }); 