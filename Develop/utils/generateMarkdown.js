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
