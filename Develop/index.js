// TODO: Include packages needed for this application
//const importedMarkdownJs = require("./generateMarkdown.js")
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./generateMarkdown.js");
//console.log(generateMarkdown);

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
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "N/A"
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



const createREADME = (answers) => {
const readmeTemplate = generateMarkdown(answers);   


fs.writeFile("README.md", readmeTemplate, (err) => {
    err ? console.err(err) :console.log("Success!")
}) 

}

function init(){
inquirer.prompt(questions)
.then((answers) => {
    createREADME(answers)
   
})
}


init();



module.exports = {
    createREADME,
};



// // TODO: Create a function to write README file
// function writeToFile()

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
