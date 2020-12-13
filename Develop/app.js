const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var teamMembers = [];

function intializeManager () {
    const managerQuestions = [
        {
            type: "input",
            name: "name",
            message: "What is your manager's name? "
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's id? "
        },
        {
            type: "input",
            name: "email",
            message: "What's your manager's email address (i.e name@gmail.com)? "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the assigned office number for your manager? "
        }
    ];
    inquirer.prompt(managerQuestions).then(function (response) {
        // console.log is to confirm inquirer.prompt worked correctly
        console.log(response);

        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

        teamMembers.push(manager);
        intializeEmployee();
    });
}

function intializeEmployee () {
    const questions = [
        {
            type: "list",
            name: "typeOfEmployee",
            message: "What type of employee would you like to add? ",
            choices: ["Engineer", "Intern", "No more employees to add"]
        }
    ];
    inquirer.prompt(questions).then(function (response){
        if (response.typeOfEmployee == "Engineer") {
            intializeEngineer();
        } else if (response.typeOfEmployee == "Intern") {
            intializeIntern();
        } else {
            console.log("Quit creating employees");
            render(teamMembers);
        }
    })
}

function intializeEngineer () {
    const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? "
    },
    {
        type: "input",
        name: "id",
        message: "What is the id number of the engineer? "
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address (i.e name@gmail.com)? "
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username? "
    }
    ];
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        teamMembers.push(engineer);
        intializeEmployee();
    });
}

function intializeIntern () {
    const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name? "
    }
    {
        type: "input",
        name: "id",
        message: "What is the id number of the intern? "
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address (i.e name@gmail.com)? "
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend? "
    }
    ];
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        const intern = new Intern (response.name, response.id, response.email, response.github);
        teamMembers.push(intern);
        intializeEmployee();
    });
}

intializeManager();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
