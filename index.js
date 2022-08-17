const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
    type: "input",
    message: "What is the Employee's name?",
    name: "name",
    },
    {
    type: "input",
    message: "Where are you from?",
    name: "location",
    },
  
])

.then((answers) => {

// const htmlPage = `<html><body><h2>${answers.name}</h2><div>${answers.location}</div></body></html>`

fs.writeFile('index.html', (htmlPage), (err) => {
  err ? console.error(err) : console.log('Success!')
})}
)