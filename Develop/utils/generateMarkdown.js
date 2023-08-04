// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
    return `# ${responses.title}

    ## Description

    ${responses.description}

    ### Installation
    
    ${responses.installation}

    ### Usage Information

    ${responses.usage}

    ### Contribution Guidelines

    ${responses.contributing}

    ## Table of Contents

    ${responses.tableOfContents}

    ## Questions

    Here is my GitHub: ${responses.github}
    And here is my email: ${responses.email}
    But I would prefer if you use my ${responses.preferredContact}.
    `;
}

module.exports = generateMarkdown;
