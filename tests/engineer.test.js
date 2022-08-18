const Engineer = require ("../lib/engineer");

describe('mkaes engineer object', () => {
    const engineer = new Engineer("Nermin", 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(engineer.name).tobe('Nermin');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).tobe('nermin.dracic@gmail.com');
    expect(engineer.github).tobe('https://github.com/ndracic')
})
test("Egineer test", () => {
    const engineer = new Engineer('Nermin', 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(engineer.getGitHub()).toEqual(expect.any(String));
  
});

test("Role Test", () => {
    const engineer = new Engineer('Nermin', 1, 'nermin.dracic@gmail.com', 'https://github.com/ndracic');
    expect(engineer.getRole()).toBe('Engineer');
  }); 