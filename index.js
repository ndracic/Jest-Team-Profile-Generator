const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/employee");

const generateHTML = require('./src/generateHTML');
let company = {
    engineers :[],
    manager : [],
    interns : [],
};

//manager questions to start
function init() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
        },
        {
        type: "input",
        message: "What is their ID?",
        name: "id",
        },
        {
        type: "input",
        message: "What is their email?",
        name: "email",
        },
        {
        type: "input",
        message: "What is their office number?",
        name: "number",
        }
    ]).then(answer =>{
        company.manager = new Manager(answer.name, answer.id, answer.email, answer.number);
        newWorker();
    })
}

function newWorker(){
    inquirer.prompt([
        {
        name: "Role",
        type: "list",
        message: "Please select the position of the new team member",
        choices: ["Engineer", "Intern", "Finished building my team"],
        },
    ]).then(function (choice){
        switch(choice.Role){
            case "Engineer":
            newEngineer();
            break;
            case "Intern":
                newIntern();
            break;
            case "Finished building my team":
                generateHTML(company);
                writeToFile("./dist/index.html", generateHTML(company))
        }
    })
}


function newEngineer () {
    inquirer.prompt([
        {
        type: "input",
        message: "What is the new Engineer's Name?",
        name: "name",
        },
        {
        type: "input",
        message: "What is their ID?",
        name: "id",
        },
        {
        type: "input",
        message: "What is their email?",
        name: "email",
        },
        {
        type: "input",
        message: "What is their GitHub UserName?",
        name: "gh",
        },
    ]).then(answer => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.gh)
        company.engineers.push(engineer);
        newWorker()
    })
}
        

function newIntern () {
    inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is Intern's first name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do they attend?'
    },
  ]).then(answer => {
    const intern = new Intern(answer.name, answer.id, answer.email, answer.school)
    company.interns.push(intern);
    newWorker()
})
}

function writeToFile(page, data) {
    fs.writeFile(page, data, error =>
        error ? console.log(error): 
        console.log("Done."))
}

init()

  // function to initialize app
// function init() {
//     // prompt questions
//     inquirer.prompt(questions).then(answers => {
//       // if done adding employees generate team
//       if (answers.role === 'Finished building my team!') {
//         console.log(answersArr);
//         generateTeam();
//         return;
//       }
//       // create manager info
//       if (answers.role === 'Manager') {
//         inquirer.prompt(manager).then(answers => {
//           const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
//           answersArr.push(manager);
//           init();
//         })
//       }
//       // create engineer info
//       if (answers.role === 'Engineer') {
//         inquirer.prompt(engineer).then(answers => {
//           const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gh);
//           answersArr.push(engineer);
//           init();
//         })
//       }
//       // create intern info
//       if (answers.role === 'Intern') {
//         inquirer.prompt(intern).then(answers => {
//           const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//           answersArr.push(intern);
//           init();
//         })
//       }
//     })
//   };
  
//   // Function call to initialize app
//   init();
  
  
//   // to write the file of the new team members
//   function generateTeam() {
//     fs.writeFileSync('./dist/generatedTeam.html', generateHTML(answersArr), "utf-8");
//     console.log('Dream Team created!')
//   };
  