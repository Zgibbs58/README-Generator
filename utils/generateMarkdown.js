const lincenseLinks = {
  MIT: ["MIT-yellow.svg", "https://opensource.org/licenses/MIT"],
  ISC: ["ISC-blue.svg", "https://opensource.org/licenses/ISC"],
  Mozilla: ["MPL_2.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"],
  Apache: ["Apache_2.0-blue.svg", "https://opensource.org/licenses/Apache-2.0"],
  EPL: ["EPL_1.0-red.svg", "https://opensource.org/licenses/EPL-1.0"],
  WTFPL: ["WTFPL-brightgreen.svg", "http://www.wtfpl.net/about/"],
};
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // licenseLinks[license][0] accesses the key that matches the license variable data and the first element of the array
  return license ? `[![License](https://img.shields.io/badge/License-${lincenseLinks[license][0]})](${lincenseLinks[license][1]})` : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `[${license}](https://opensource.org/licenses/${lincenseLinks[license][1]})` : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
    ? `## License

  ${renderLicenseLink(license)}`
    : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Contribution
  
  ${data.contribution}

  ## Tests
  
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions

  Github Account: [${data.gitName}](https://github.com/${data.gitName})

  Email Address: [${data.email}](mailto:${data.email})

  ${data.prefCom}
  
  `;
}

module.exports = generateMarkdown;
