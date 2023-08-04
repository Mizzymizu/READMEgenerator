// TODO: Include packages needed for this application

const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')


inquirer
.prompt({
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
    name: 'tableOfContents',
    message: 'Please provide a Table of Contents for your project. If there is no Table of Contents, please type "N/A".',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.',
},
{
    type: 'input',
    name: 'usage',
    message: 'How can I use your product?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can someone contribute to your project?',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'list',
    name: 'choice',
    message: 'What is your preferred method of contact?'
})
.then((responses) => {
    const readmeContent = generateMarkdown(responses)
    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    )
})
