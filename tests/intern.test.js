const Intern = require ("../lib/Intern");

describe('Intern object', () => {
    const intern = new Intern("Nermin", 5, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(intern.name).tobe('Nermin');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).tobe('nermin.dracic@gmail.com');
    expect(intern.github).tobe('https://github.com/ndracic')
})
test("Intern's school test", () => {
    const intern = new Intern('Nermin', 5, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(intern.getSchool()).toEqual(expect.any(String));
  
});

test("Role Test", () => {
    const intern = new Intern('Nermin', 5, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(intern.getRole()).toBe('Intern');
  }); 