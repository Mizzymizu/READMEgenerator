// TODO: Include packages needed for this application

const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')



// TODO: Create an array of questions for user input
const questions = [{
    type: 'confirm ',
    name: 'begin',
    message: 'Are you ready to create a README file?',
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
},
{
    type: 'input',
    name: 'table of contents',
    message: 'Please provide a Table of Contents for your project. If there is no Table of Contents, please type "N/A".',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, ) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
