const inquirer = require('inquirer');
const fs = require('fs')

const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/employee")

const generateHTML = require('./src/generateHTML');
let answersA = [];

const manager = () => {
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
    ])
    }

const questions = () => {
    inquirer.prompt([
        {
        name: "Role",
        type: "list",
        message: "Please select the position of the new team member",
        choices: ["Engineer", "Intern", "Finished building my team"],
        },
    ])
}

const engineer = () =>
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
        ])

const intern = () => 
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
    }
  ]);

  function init() {
    // prompt questions
    inquirer.prompt(questions).then(answers => {
      // if done adding employees generate team
      if (answers.role === 'Im all done!') {
        console.log(answersA);
        makeTeam();
        return;
      }

if (answers.role === 'manager') {
    inquirer.prompt(manager).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
        answersA.push(manager);
        init();
      })
}

if (answers.role === "engineer") {
    inquirer.prompt(engineer).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gh);
        answersA.push(engineer);
        init();
    })
}
if (answers.role === "intern") {
    inquirer.prompt(intern).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.gh);
        answersA.push(intern);
        init();
    })
    }}
    )}
  
init();

function makeTeam() {
    fs.writeFileSync('./dist/generatedTeam.html', generateHTML(answersA), "utf-8");
    console.log('The companys team has been made.')
  };
  