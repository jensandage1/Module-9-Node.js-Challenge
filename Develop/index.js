// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for creating this project?"
    },
    {
        type: "input",
        name: "problemSolved",
        message: "What problem does this project solve?"
    },
    {
        type: "input",
        name: "infoLearned",
        message: "What did you learn while creating this project?"
    },
    {
        type: "input",
        name: "installationProcess",
        message: "What steps are needed to install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain how to use this project."
    },
    {
        type: "confirm",
        name: "collaborators",
        message: "Did you collaborate with others to create this project?"
    },
    {
        type: "input",
        name: "collaboratorsInfo",
        message: "If you worked with collaborators, please enter their information. If not, leave blank."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose your license.",
        choices: [
            "Public Domain",
            "Unlicensed",
            "Commercial",
            "Copyleft"
        ] 
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address."
    },
    {
        type: "input",
        name: "githubAcct",
        message: "Please enter your GitHub username."
    }

];



const createREADME = ({title, motivation, problemSolved, infoLearned, installationProcess, usage, collaborators, collaboratorsInfo, license, emailAddress, githubAcct}) => {
    const readmeTemplate = `
    # Title:
    ${title}

    ## Description:
    ${motivation}
    ${problemSolved}
    ${infoLearned}

    ## Table of Contents:
    -Installation
    -Usage
    -Creadits
    -License

    ## Installation
    ${installationProcess}

    ## Usage
    ${usage}

    ## Credits
    ${collaborators}
    ${collaboratorsInfo}

    ## License
    ${license}

    ## Tests

    ## Questions
    Link to the repository:
    ${githubAcct}
    If you have any additional questions, feel free to reach out to me through email. 
    ${emailAddress}

    `


fs.writeFile("README.md", readmeTemplate, (err) => {
    err ? console.err(err) :console.log("Success!")
}) 

}
inquirer.prompt(questions)
.then((answers) => {
    createREADME(answers)
})

// // TODO: Create a function to write README file
// function writeToFile()

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
