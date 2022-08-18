// const Engineer = require("../lib/engineer");

generateHTML = company => {
    let newHTML = [];
    newHTML.push(addManager(company.manager))
    newHTML.push(company.interns.map(intern=>addIntern(intern)).join(''));
    newHTML.push(company.engineers.map(engineer=>addEngineer(engineer)).join(''));
    return newHTML.join('');
}

addManager = manager => {
    return `<!-- Manager card -->
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title text-center" id="name">${manager.getName()}</h3>
        <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${manager.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="id">ID: ${manager.id()}</li>
        <li class="list-group-item" id="email"><a href="mailto:${manager.email()}">Email: ${manager.email()}</a></li>
        <li class="list-group-item" id="github"><a href="https://github.com/${manager.gh()}" target="_blank">Github: ${manager.github()}</a></li>
      </ul>
    </div>`;
};

const addEngineer = engineer => {
    return `
    <!-- Engineer card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${engineer.getName()}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${engineer.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${engineer.id()}</li>
      <li class="list-group-item" id="email"><a href="mailto:${engineer.email()}">Email: ${engineer.email()}</a></li>
      <li class="list-group-item" id="github"><a href="https://github.com/${engineer.github()}" target="_blank">Github: ${engineer.github()}</a></li>
    </ul>
  </div>`;
}

const addIntern = intern => {
return ` 
  <!-- Intern card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${intern.name()}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${intern.id()}</li>
      <li class="list-group-item" id="email"><a href="mailto:${intern.email()}">Email: ${intern.email()}</a></li>
      <li class="list-group-item" id="school">School: ${intern.school()}</li>
    </ul>
  </div>`;
};
  
module.exports = company => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="styles.css" />
      <script src="https://kit.fontawesome.com/3ff242710e.js" crossorigin="anonymous"></script>
      <title>Team Profile</title>
    </head>
    <body>
      <!-- jumbotron -->
      <div id="jumbotron" class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-1">The Dream Team</h1>
        </div>
      </div>
      <!-- card container -->
      <div class="container" id="card-container">
        <div class="row">
          <div class="card-area col-12 d-flex justify-content-center mt-5">
  ${generateHTML}
          </div>
        </div>
      </div>
    </body>
    </html>`;
  }
