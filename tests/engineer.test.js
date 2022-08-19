const Engineer = require ("../lib/engineer");

describe('mkaes engineer object', () => {
    const engineer = new Engineer("Nermin", 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(engineer.name).toBe('Nermin');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('nermin.dracic@gmail.com');
    expect(engineer.github).toBe('https://github.com/ndracic')
})
test("Egineer test", () => {
    const engineer = new Engineer('Nermin', 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(engineer.getGithub()).toEqual(expect.any(String));
  
});

test("Role Test", () => {
    const engineer = new Engineer('Nermin', 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(engineer.getRole()).toBe('Engineer');
  }); 