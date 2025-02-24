// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license: string) : string {

  const str_ = `![Static Badge](https://img.shields.io/badge/${license.replace(/\s+/g, '')}-Licence-blue)

This project is covered under the ${license} License.`

  return (license === 'No License') ? `` : str_;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license: string) : string {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`
    case 'ISC':
      return `https://opensource.org/licenses/ISC`;
    case 'GNU GPLv2':
      return `https://opensource.org/licenses/GPLv2`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license: string) {

  return `${renderLicenseBadge(license)}
   
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data: any) : string {
  
  return `
# ${data.project_name}

## Description
<u>What is the proyect motivation?</u>  
${data.project_description}

<u>Why did you build this project?</u>  
${data.project_justification}

<u>What problem does it solve?</u>  
${data.project_solution}

<u>What did you learn?</u>  
${data.project_learnings}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation_instructions}

## Usage
${data.usage_information}

## Contributing
${data.contribution_guidelines}

## Test
${data.test_instructions}

## License
${renderLicenseSection(data.license_election)}

## Questions
- Feel free to enter my GitHub page to see more interesting projects. -> https://github.com/${data.github_profile}.
- For any questions regarding this project, please reach out to me on: ${data.contact_email}.
`;
}



export default generateMarkdown;
