const inquirer = require('inquirer');
const fs = require('fs')

const engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const intern = require("./lib/employee")

const generateHTML = require('./src/generateHTML');
let answersArr = [];

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
        name: "location",
        },
        {
        type: "input",
        message: "What is their email?",
        name: "location",
        },
        {
        type: "input",
        message: "What is their office number?",
        name: "location",
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




// .then((answers) => {

// // const htmlPage = `<html><body><h2>${answers.name}</h2><div>${answers.location}</div></body></html>`

// fs.writeFile('index.html', (htmlPage), (err) => {
//   err ? console.error(err) : console.log('Success!')
// })}
// )